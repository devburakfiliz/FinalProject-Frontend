import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginGuard } from './guards/login.guard';
const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductsComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/category/:categoryId",component:ProductsComponent},
  {path:"products/add",component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
