import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApistestsService {
  pros: any;

  constructor(private _HttpClient: HttpClient) {}

  getAllProduct(): Observable<any> {
    return this._HttpClient.get('https://dummyjson.com/products');
  }
  getallFromMyApis(): Observable<any> {
    return this._HttpClient.get('http://127.0.0.1:8000/api/smproductslabs');
  }
  getallFromMyApisOneProd(Pid: any): Observable<any> {
    return this._HttpClient.get(
      `http://127.0.0.1:8000/api/smproductslabs/${Pid}`
    );
  }

  postProductToMyApis(newProd: any): Observable<any> {
    console.log('newProd,', newProd);

    const headers = {
      Authorization: 'Bearer my-token',
      // 'My-Custom-Header': 'foobar',
    };

    const body = newProd;

    return this._HttpClient.post(
      `http://127.0.0.1:8000/api/smproductslabs/`,
      body,
      { headers }
    );
  }

  putProductToMyApis(id: any, newProd: FormData): Observable<any> {
    // console.log('serverrrrrrrrrrrrrr fomtdata,', newProd);

    const headers = {
      Authorization: 'Bearer my-token',
    };
    // 'My-Custom-Header': 'foobar',

    const body = newProd;

    return this._HttpClient.post(
      `http://127.0.0.1:8000/api/smproductslabs/${id}?_method=PATCH`,
      body,
      { headers }
    );
   


/*************************** YTEST METHOD ************ */
 // {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }


    // const headers = {
    //   Authorization: 'Bearer my-token',
    //   'Content-Type': 'application/json',
    //   method: 'patch',
    // };
    // const body = JSON.stringify(newProd);

    // return this._HttpClient.patch(
    //   `http://127.0.0.1:8000/api/smproductslabs/${id}`,
    //   body,
    //   { headers }
    // );

/* /************     ******* *** * * * * * * ***************  */ 

/********************************ANYTHOR TEST METHODDDDDDD */

    // return this._HttpClient.patch(
    //   `http://127.0.0.1:8000/api/smproductslabs/1`,
    //   {
    //     "codeNumber": 32,
    //     "description": "cat1zxzdgdf",
    //     "image": null,
    //     "logo": "[1706073604][angularImage]LEGO_logo.png",
    //     "name": "goooood hhh",
    //     "price": 34,
    //     "smcategorieslab_id": 2
    //   },
    //   { headers }
    // );

/*************************************************** */
  }

  myApisToDeleteProducts(id: any): Observable<any> {
    return this._HttpClient.delete(
      `http://127.0.0.1:8000/api/smproductslabs/${id}?_method=PATCH`
    );
  }
}
