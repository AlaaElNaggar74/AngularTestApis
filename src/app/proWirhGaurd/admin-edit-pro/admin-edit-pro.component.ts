import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ApiProductsService } from '../services/allServ/api-products.service';
import { ApiCategoryService } from '../services/allServ/api-category.service';

@Component({
  selector: 'app-admin-edit-pro',
  templateUrl: './admin-edit-pro.component.html',
  styleUrls: ['./admin-edit-pro.component.css'],
})
export class AdminEditProComponent {
  name: string = '';
  price: number | null = null;
  quantity: number | null = null;
  categoryId: number = 0;
  imagesUrl: string = '';
  isSelected: boolean = false;

  editProdId: any;
  allCateg: any;
  constructor(
    private _Location: Location,
    private _ApiProductsService: ApiProductsService,
    private _ActivatedRoute: ActivatedRoute,
    private _ApiCategoryService: ApiCategoryService,
    private _Router:Router
  ) {
    _ActivatedRoute.paramMap.subscribe((paramsMap: any) => {
      this.editProdId = paramsMap.params.id;
      console.log('AdminEditProComponent ID', typeof this.editProdId);
      // _ApiProductsService.getOneProduct(this.editProdId).subscribe();
    });
  }

  ngOnInit() {
    this._ApiProductsService.getOneProduct(this.editProdId).subscribe({
      next: (data: any) => {
        let productObj = data;

        (this.name = productObj.name),
          (this.price = productObj.price),
          (this.quantity = productObj.quantity),
          (this.categoryId = productObj.categoryId),
          (this.imagesUrl = productObj.imagesUrl),
          (this.isSelected = productObj.isSelected),
          console.log('getOneProduct-data', data);
      },
      error: (error: any) => {
        console.log('getOneProduct-Error', error);
      },
      complete: () => {
        console.log('getOneProduct-complete');
      },
    });

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
      isSelected: this.isSelected,
    };
    console.log('The New Data Is : ', NewProduct);
    console.log('event ', event);

    this._ApiProductsService
      .editProduct(this.editProdId, NewProduct)
      .subscribe({
        next: (data: any) => {
          console.log('editProduct-data', data);
          // this._Location.back();
          this._Router.navigate(['/service-gaurd/adminstable-gu']);
                 },
        error: (error: any) => {
          console.log('editProduct-Error', error);
        },
        complete: () => {
          console.log('editProduct-complete');
        },
      });
  }

  backFun() {
    this._Location.back();
  }
}
