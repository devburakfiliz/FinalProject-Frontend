import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule  } from "@angular/common/http";
import { FormsModule } from '@angular/forms'; //ngModule kullanabılmek ıcın

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule   // ngModelu ıcın
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
