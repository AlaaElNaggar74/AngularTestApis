import { Observable, catchError, retry, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseVm } from '../../interfaces/vm/api-response-vm';

@Injectable({
  providedIn: 'root',
})
export class GenericHandlerService {
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
    return throwError(() => new Error(`errrrrrr GenericHandlerService`));
  }

  constructor(private _HttpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token',
      }),
    };
  }
  private setNewHeadersOption(key: any, value: any) {
    this.httpOptions.headers.set(key, value);
  }

  getAllProductsFromGeneric(UrlLink: any) {
    console.log(this.httpOptions);

    return this._HttpClient
      .get(`${UrlLink}`, this.httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }
  addProductsUsingGeneric(UrlLink: any, obj: any) {
    // this.httpOptions.headers={
    //   Authorization: 'my-auth-token',
    // }
    this.setNewHeadersOption('Authorization', 'my-auth-token');

    // console.log(this.httpOptions);

    return this._HttpClient
      .post(`${UrlLink}`, obj, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
