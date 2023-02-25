import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  filterText="";

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService
  ) {} // injection yapıldı.

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })

  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      //url den gelen sonucu ProductResponseModel e map le ve dönecek sonuca abone ol gelen yanıt response
      this.products = response.data; //
      this.dataLoaded = true;
    });
  }
  getProductsByCategory(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
      })
  }
  addToCart(product:Product){
    this.toastrService.success("Sepete eklendi",product.productName)
  }
}
