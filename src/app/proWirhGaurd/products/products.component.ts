import { InterfaceProducts } from 'src/app/smallProject/models/interface-products';
import { ApiProductsService } from './../services/allServ/api-products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsGaurdComponent {
  parentSelectedCat: number = 0;
  parentSearchName: string = '';
  displayValue = 'ready we click to child of child ';
  products!: InterfaceProducts[];
  productsClone!: InterfaceProducts[];
  productsForAllSelected!: InterfaceProducts[];
  // /// // OR /// ///
  // products: InterfaceProducts[] | null =null;
  constructor(private _ApiProductsService: ApiProductsService) {
    _ApiProductsService.getAllProducts().subscribe({
      next: (data: any) => {
        this.products = data;
        this.productsClone = data;
        this.productsForAllSelected = data;
        // console.log('ProductsGaurdComponent-data', data);
      },
      error: (error: any) => {
        // console.log('ProductsGaurdComponent-Error', error);
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }

  // // Get Product By CatId By Using json server query string .
  // getSelectedFromChild(event: number) {
  //   this.parentSelectedCat = event;
  //   this._ApiProductsService
  //     .getOneProductByCatId(this.parentSelectedCat)
  //     .subscribe({
  //       next: (data: any) => {
  //         this.products=data;
  //         console.log('getOneProductByCatId', data);
  //       },
  //       error: (error: any) => {
  //         console.log('getOneProductByCatId-error', error);
  //       },
  //       complete: () => {
  //         console.log('getOneProductByCatId-complete');
  //       },
  //     });
  // }

  // // Get Product By CatId By Using Pipe depend on OverLoads
  getSelectedFromChild(event: number) {
    let objSubSc = {
      next: (data: any) => {
        this.products = data;
        this.productsClone = data;

        console.log('getProductsByCatId', data);
      },
      error: (error: any) => {
        console.log('getProductsByCatId-error', error);
      },
      complete: () => {
        console.log('getProductsByCatId-complete');
      },
    };

    this.parentSelectedCat = event;
    if (this.parentSelectedCat == 0) {
      this.products = this.productsForAllSelected;
    } else {
      this._ApiProductsService
        .getProductsByCatId(this.parentSelectedCat)
        .pipe()
        .subscribe(objSubSc);
    }
  }

  getSearchNameFromChild(event: string) {
    this.parentSearchName = event;
    if (event == ' ' || event == '') {
      if (this.parentSelectedCat == 0) {
        this.products = this.productsForAllSelected;
        
      }else{
        this.products = this.productsClone;

      }
    }
    // // When Use The Search Should Make Clone From Data And Make Filter On It
    // // Every Click Should Make Filter On All Products Not Products Come From First Filter SO This Line
    // //   this.products = this.products.filter((ele: InterfaceProducts) =>
    // //   ele.name.includes(event.trim())
    //// );  // // not work good
    // // to Show Change Every Click On Screen
    else {
      this.products = this.productsClone.filter((ele: InterfaceProducts) =>
        // ele.name.includes(event.trim())
        ele.name.toLowerCase().includes(event.trim())
      );
    }
  }
  numberToArr(number: number) {
    return Array(number);
  }

  displayChildOfChild(event: any) {
    this.displayValue = event;
  }

  addToCardStateFun() {}
}
