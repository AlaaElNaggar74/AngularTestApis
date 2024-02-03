import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/config/config';

@Injectable({
  providedIn: 'root',
})
export class ApiCategoryService {
  api_Category_Api = AppConfig.apiUrl_Json_Server;
  constructor(private _HttpClient: HttpClient) {}

  getAllCategory() {
    return this._HttpClient.get(`${this.api_Category_Api}Iti-Categories`);
  }
}
