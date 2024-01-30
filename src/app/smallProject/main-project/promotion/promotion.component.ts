import { PromotionService } from './promotion.service';
import { Component } from '@angular/core';
// import { Apollo } from 'apollo-angular';
// import gql from 'graphql-tag';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
})
export class PromotionComponent {
  products: Array<any> = [];
  cloneArray: Array<any> = [];
  pageEle: Array<any> = [];
  pageSizePare: number = 5;
  totalItemsPare: number = 0;
  tabs:number=0;

  constructor(private _PromotionService: PromotionService) {
    _PromotionService.getAllDummyProducts().subscribe((data: any) => {
      this.products = data.products;
      this.totalItemsPare = data.products.length ;
      this.tabs=this.totalItemsPare/this.pageSizePare;
      console.log("tabs",this.tabs);
      
      this.cloneArray = [...this.products];
      this.pageEle = this.cloneArray.slice(0, this.pageSizePare);

      console.log('data', data.products);
    });
  }

  onPageChanged(event: any) {
    // this._PromotionService.getAllDummyProducts().subscribe((data: any) => {
    //   const startIndex = event.pageIndex * event.pageSize;
    //   const endIndex = startIndex + event.pageSize;
    //   this.products = this.products.slice(startIndex, endIndex);
    // });

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    console.log('startIndex', startIndex);
    console.log('endIndex', endIndex);
    console.log('event.totalItems', event.totalItems);

    if (endIndex >= event.length) {
      endIndex = event.length;
    }
    this.cloneArray = this.products.slice(startIndex, endIndex);
    this.cloneArray = [...this.products];
    this.pageEle = this.cloneArray.slice(startIndex, endIndex);

    console.log('this.products', this.products);

    console.log('dddddddd-event', event);

    // const startIndex = event.pageIndex * event.pageSize;
    // const endIndex = startIndex + event.pageSize;
    // this.cloneArray = this.products.slice(startIndex, endIndex);
    // console.log('this.products', this.products);

    // console.log('dddddddd-event', event);

    // var myArrayex = ['one', 'two', 'three'];
    // var cloneArrayex = myArrayex.slice();

    // myArrayex.splice(1, 1);

    // console.log(myArrayex);
    // console.log(cloneArrayex);
  }

  // currentPage: number = 1;
  // totalPages: number = 10;
  // data: any[] = [];

  // constructor(private _PromotionService:PromotionService ){}
  // ngOnInit(): void {
  //   this.loadData();
  // }

  // onPageChange(page: number): void {
  //   this.currentPage = page;
  //   this.loadData();
  // }

  // loadData(): void {

  //   this._PromotionService.getAllDummyProducts(this.currentPage).subscribe((data:any) => {
  //     this.data = data.products;
  //     this.totalPages = Math.ceil(data.length / 10);
  //   });
  // }
  arraOf(num:number){
    // return Array.of(num);
    return Array(num);

  }
}
