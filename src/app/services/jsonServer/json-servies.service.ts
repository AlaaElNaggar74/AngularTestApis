import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/config/config';
@Injectable({
  providedIn: 'root',
})
export class JsonServiesService {
  allProductsJson = `${AppConfig.apiUrl_Json_Server}products`;
  allProductsDummy = `${AppConfig.apiUrl_Dummy_Products}products`;
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this._HttpClient.get(this.allProductsJson);
  }
}
