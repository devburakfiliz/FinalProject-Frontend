import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductsComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/category/:categoryId",component:ProductsComponent},
  {path:"products/add",component:ProductAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
