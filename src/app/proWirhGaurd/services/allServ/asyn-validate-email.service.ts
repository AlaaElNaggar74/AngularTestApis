import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsynValidateEmailService {
  constructor(private _HttpClient: HttpClient) {}
   arrEmail:any=[
    "alaa1@gmai.com",
    "alaa2@gmali.com",
    "alaa3@gmail.com",
    "alaa4@gmail.com"
  ];
  
 alleMAIL(): any {
    this._HttpClient.get<Array<string>>(
      `http://localhost:5050/testAsyncValidation`
    ).subscribe(
      {
        next: (data: any) => {
          this.arrEmail = data;
          console.log(this.arrEmail);
        },
        error: (error: any) => {
          console.log('error', error);
        },
        complete: () => {
          console.log('complete');
        },
      }
    );
  }
  checkExistEmail(value:any){
    return of(this.arrEmail.some((ele:any)=> ele == value)).pipe(
      delay(1000),
    );

  }
}
