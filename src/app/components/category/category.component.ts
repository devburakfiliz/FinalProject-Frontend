import { Component,OnInit} from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory :Category; // "strictPropertyInitialization": false, tsconfig.json
  dataLoaded = false;


  constructor(private categoryService:CategoryService) {} // injection yapıldı.

  ngOnInit(): void {
   this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories() .subscribe((response) => {  //url den gelen sonucu ProductResponseModel e map le ve dönecek sonuca abone ol gelen yanıt response 
      this.categories= response.data   //
      this.dataLoaded = true;
    }) 

  }
  setCurrentCategory(category:Category){
    this.currentCategory=category;

  }
  getCurrentCAtegoryClass(category:Category){
    if (category == this.currentCategory) {
      return "list-group-item active"
    }else{
      return"list-group-item"
    }
  }
  getAllCategoryClass(){
    if (!this.currentCategory) {
      return "list-group-item active"     
    }else{
      return"list-group-item"

    }
  }
}