import { InterfaceProducts } from './../../../smallProject/models/interface-products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/config/config';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  apiUrl_Json_Server_iti = AppConfig.apiUrl_Json_Server;
  

  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Observable<InterfaceProducts[]> {
    return this._HttpClient.get<InterfaceProducts[]>(
      `${this.apiUrl_Json_Server_iti}Iti-Products`
    );
  }

  getOneProduct(Pid: number): Observable<InterfaceProducts> {
    return this._HttpClient.get<InterfaceProducts>(
      `${this.apiUrl_Json_Server_iti}Iti-Products/${Pid}`
    );
    // return this._HttpClient.get(
    //   `${this.apiUrl_Json_Server_iti}Iti-Products?id=${Pid}`
    // );
  }

  getProductsByCatId(Cid: number): Observable<InterfaceProducts[]> {
    return this._HttpClient.get<InterfaceProducts[]>(
      `${this.apiUrl_Json_Server_iti}Iti-Products?categoryId=${Cid}`
    );
  }

  createProduct(newObj: any) {
    return this._HttpClient.post(
      `${this.apiUrl_Json_Server_iti}Iti-Products/`,
      newObj
    );
  }

  editProduct(Pid: any, obj: any) {
    return this._HttpClient.patch(
      `${this.apiUrl_Json_Server_iti}Iti-Products/${Pid}`,
      obj
    );
  }

  deleteProduct(Pid: number) {
    return this._HttpClient.delete(
      `${this.apiUrl_Json_Server_iti}Iti-Products/${Pid}`
    );
  }
  searchByName() {}
}
