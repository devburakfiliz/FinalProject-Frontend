import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
// formbuilder form htmll ile yazıcagımız kontrollerı ilişkişlendireceğimiz yer servis gibi.


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm : FormGroup;

  constructor(private formBuilder:FormBuilder,
    private productService:ProductService,
    private toastrService:ToastrService){}
  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }
  add(){
    if (this.productAddForm.valid) {
      let product:Product = Object.assign({}, this.productAddForm.value);
      
        this.productService.add(product).subscribe(response=>{
        this.toastrService.success(response.message, "Başarılı!");
        // if (response.success==true) {
        //   this.toastrService.success("Sepete eklendi")
        //   this.rentalService.add(rental);

        // }
      } ,responseError=>{  
        console.log(responseError.error.message)

        if(responseError){
         
            this.toastrService.error(responseError.error.message
              ,"Doğrulama hatası")
              
        } 
        
      }
      )
    } else {
      this.toastrService.error("Lütfen tüm alanları doldurunuz.", "Hata!")
    }
  }

}
