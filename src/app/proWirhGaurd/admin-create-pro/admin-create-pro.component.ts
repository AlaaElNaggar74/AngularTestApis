import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ApiProductsService } from '../services/allServ/api-products.service';
import { ApiCategoryService } from '../services/allServ/api-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-pro',
  templateUrl: './admin-create-pro.component.html',
  styleUrls: ['./admin-create-pro.component.css'],
})
export class AdminCreateProComponent {
  name: string = '';
  price: number | null = null;
  quantity: number | null = null;
  categoryId: number = 0;
  imagesUrl: string = '';
  isSelected: boolean = false;

  allCateg: any;
  constructor(
    private _Location: Location,
    private _ApiProductsService: ApiProductsService,
    private _ApiCategoryService: ApiCategoryService,
    private _Router:Router
  ) {}

  ngOnInit() {
    this._ApiCategoryService.getAllCategory().subscribe({
      next: (data: any) => {
        this.allCateg = data;
      },
      error: (error: any) => {
        console.log('getOneProduct-Error', error);
      },
      complete: () => {
        console.log('getOneProduct-complete');
      },
    });
  }
  onSubmitt(event: any) {
    let NewProduct = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      categoryId: this.categoryId,
      imagesUrl: this.imagesUrl,
      isSelected: false,
    };

    this._ApiProductsService.createProduct(NewProduct).subscribe({
      next: (data: any) => {
        console.log('createProduct-Data', data);
        this._Router.navigate(['/service-gaurd/adminstable-gu']);

      },
      error: (error: any) => {
        console.log('createProduct-ERROR', error);
      },
      complete: () => {
        console.log('createProduct-Complete');
      },
    });
    // // Using Generic Services 
    // this._ApiProductsService.createProductFromGene(NewProduct).subscribe({
    //   next: (data: any) => {
    //     console.log('createProduct-Data', data);
    //     this._Router.navigate(['/service-gaurd/adminstable-gu']);

    //   },
    //   error: (error: any) => {
    //     console.log('createProduct-ERROR', error);
    //   },
    //   complete: () => {
    //     console.log('createProduct-Complete');
    //   },
    // });

    console.log('The New Data Is : ', NewProduct);
  }

  backFun() {
    this._Location.back();
  }
}
