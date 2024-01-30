import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  apiUrl_Dummy_Products=AppConfig.apiUrl_Dummy_Products;
  allProducts=`${this.apiUrl_Dummy_Products}products`
  constructor(private _HttpClient:HttpClient){

  }

  getAllDummyProducts(){
    return this._HttpClient.get(this.allProducts);
  }

  // getAllDummyProducts(currentPage:any){
  //   return this._HttpClient.get(`${this.allProducts}?page=${currentPage}&pageSize=10`);
  // }
}
