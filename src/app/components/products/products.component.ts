import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;


  constructor(private productService:ProductService) {} // injection yapıldı.

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts() .subscribe((response) => {  //url den gelen sonucu ProductResponseModel e map le ve dönecek sonuca abone ol gelen yanıt response 
      this.products= response.data   //
      this.dataLoaded = true;
    }) 

  }
}
