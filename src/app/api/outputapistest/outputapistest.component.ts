import { Component } from '@angular/core';
import { ApistestsService } from 'src/app/services/apistests.service';
@Component({
  selector: 'app-outputapistest',
  templateUrl: './outputapistest.component.html',
  styleUrls: ['./outputapistest.component.css'],
})
export class OutputapistestComponent {
  allProducts: any = [];
  allProductsOfMyApis: any = [];
  imageUrl = 'http://127.0.0.1:8000/images/smproducts/';
  logUrl = 'http://127.0.0.1:8000/images/serverImages/';
  constructor(private _ApistestsService: ApistestsService) {
    //  _ApistestsService.getAllProduct().subscribe((data)=>{
    //   this.allProducts =data.products;
    //   // console.log(data.products);

    // });

    _ApistestsService.getallFromMyApis().subscribe((data) => {
      this.allProductsOfMyApis = data.data;
      console.log(this.allProductsOfMyApis);
      // console.log(data);
    });

    // console.log("this.allProducts",this.allProducts);
  }

  onDelete(pId: any) {
    this._ApistestsService.myApisToDeleteProducts(pId).subscribe({
      next: (data) => {
        this._ApistestsService.getallFromMyApis().subscribe((data) => {
          this.allProductsOfMyApis = data.data;
          console.log(this.allProductsOfMyApis);
          // console.log(data);
        });
        console.log('delete', data);
      },
      error: (error) => {
        console.log('errrDelet', error);
      },
      complete: () => {
        console.log('Done');
      },
    });
  }
}
