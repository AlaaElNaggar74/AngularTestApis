import { InterfaceProducts } from './../../../smallProject/models/interface-products';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/config/config';
import { GenericHandlerService } from './generic-handler.service';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  httpOptions;

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  apiUrl_Json_Server_iti = AppConfig.apiUrl_Json_Server;

  constructor(
    private _HttpClient: HttpClient,
    private _GenericHandlerService: GenericHandlerService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token',
      }),
    };
  }

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
      `${this.apiUrl_Json_Server_iti}Iti-Products?categoryId=${Cid}`,
      this.httpOptions
    );
  }

  createProduct(newObj: any): Observable<any> {
    // return this._HttpClient.post<InterfaceProducts>(
    //   `${this.apiUrl_Json_Server_iti}Iti-Products/`,
    //   newObj,
    //   this.httpOptions
    // );
    return this._HttpClient
      .post<InterfaceProducts>(
        `${this.apiUrl_Json_Server_iti}Iti-Products`,
        newObj,
        this.httpOptions
      )
      .pipe(
        retry(2),
        catchError(this.handleError)
        // catchError((err:any) => {
        //   console.log(err);
        //   return throwError((err: any) => {
        //     console.log(err);
        //   });
        // })
      );
  }
  createProductFromGene(newObj: any): Observable<any> {
    return this._GenericHandlerService
      .addProductsUsingGeneric(
        `${this.apiUrl_Json_Server_iti}Iti-Products`,
        newObj
      )
      .pipe(map((res) => console.log("-- ApiResponseVm --",res)));
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
