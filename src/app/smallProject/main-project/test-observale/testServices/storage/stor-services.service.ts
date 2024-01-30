import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorServicesService {
  token: number = 123456789;


  isLogSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _HttpClient: HttpClient) {
    // localStorage.getItem("userData")?this.isLogSubject.next(true):this.isLogSubject.next(false);
    this.isLogSubject.next(this.islogin);
  }

  login(userName: string, password: number) {
    localStorage.setItem(
      'userData',
      JSON.stringify({ token: this.token, userName, password })
    );
    this.isLogSubject.next(true);
  }
  logout() {
    localStorage.removeItem('userData');
    this.isLogSubject.next(false);
  }
  get islogin() {
    return localStorage.getItem('userData') ? true : false;
  }
  get isloginStatus() {
    return this.isLogSubject;
  }
}
