import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule  } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //ngModule kullanabılmek ıcın
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // elle ekle

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,  // elle ekle
    FormsModule ,  // ngModelu ıcın
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
