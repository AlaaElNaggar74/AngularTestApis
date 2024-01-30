import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userRegisterList: Array<any> = [];
  islogInsideServices: BehaviorSubject<boolean>;
  logedUserData:BehaviorSubject<any>;

  constructor(private _Router: Router) {
    this.islogInsideServices = new BehaviorSubject<boolean>(
      this.checkLocalStorageItemLogin
    );
    this.logedUserData=new BehaviorSubject<any>(this.getUserDataLocalStorage);
  }

  logginGaurd(data: any) {
    // console.log("this.islogInsideServices - Before",this.islogInsideServices.value);
    let GaurdDetailsStorage = JSON.parse(localStorage.getItem('GaurdDetails')!);

    // console.log('GaurdDetailsStorage', typeof GaurdDetailsStorage);
    // console.log('Array.isArray', Array.isArray(GaurdDetailsStorage));
    // console.log('Array.isArray', GaurdDetailsStorage);
    let UserFound = GaurdDetailsStorage.find((ele: any) => {
      // console.log("ele.email---",ele.email);
      // console.log("ele.email---",data.email);

      return ele.email == data.email;
    });
    console.log('GaurdDetailsStorage', GaurdDetailsStorage);
    console.log('data', data);
    console.log('let UserFound', JSON.stringify(UserFound));

    if (UserFound) {
      if (UserFound.password == data.password) {
        localStorage.setItem('currentLogginUser', JSON.stringify(UserFound));
        localStorage.setItem('currentUserToken', 'login');

        console.log('TRUE', UserFound);
        this.islogInsideServices.next(true);
        this.logedUserData.next(this.getUserDataLocalStorage);
        this._Router.navigate(['/service-gaurd/sechome']);
      } else {
        console.log('FALSE', UserFound);
        let obj = {
          passord: 'Pasword Not Failed',
        };
        this._Router.navigate(['/service-gaurd/loogaurd'], {
          queryParams: obj,
        });
        // this._Router.navigate(['/service-gaurd/loogaurd',obj]);
      }
    } else {
      // this._Router.navigate(['/service-gaurd/loogaurd',{email:"EMAIL Not Failed"}]);
      this._Router.navigate(['/service-gaurd/loogaurd'], {
        queryParams: { email: 'EMAIL Not Failed' },
      });
      // console.log('falseeeee');
    }

    // let userStrigify = JSON.stringify(data);
    // localStorage.setItem('GaurdDetails', userStrigify);
    // this.islogInsideServices.next(true);
    // console.log("this.islogInsideServices - After",this.islogInsideServices.value);
  }
  registerGaurd(data: any) {
    // console.log("this.islogInsideServices - Before",this.islogInsideServices.value);
    this.userRegisterList.push(data);
    let userStrigify = JSON.stringify(this.userRegisterList);
    localStorage.setItem('GaurdDetails', userStrigify);
    console.log(this.userRegisterList);
    this._Router.navigate(['/service-gaurd/loogaurd']);
    // this.islogInsideServices.next(true);
    // console.log("this.islogInsideServices - After",this.islogInsideServices.value);
  }
  loggOutGaurd() {
    // console.log("this.islogInsideServices - beffooore",this.islogInsideServices.value);
    // let remainUser= this.userRegisterList.filter((user:any)=>{user.email != logOutUser.email});
    // let userStrigify = JSON.stringify(remainUser);
    // localStorage.setItem('GaurdDetails', userStrigify);
    // let GaurdDetailsStorage = JSON.parse(localStorage.getItem('GaurdDetails')!);
    let currentLogginUser = JSON.parse(
      localStorage.getItem('currentLogginUser')!
    );
    // let newArr = GaurdDetailsStorage.filter(
    //   (ele: any) => ele.email != currentLogginUser.email
    // );
    // localStorage.setItem('GaurdDetails', JSON.stringify(newArr));
    localStorage.removeItem('currentLogginUser');
    localStorage.removeItem('currentUserToken');

    this.islogInsideServices.next(false);
    // console.log("this.islogInsideServices - Afterrrrrr",this.islogInsideServices.value);
  }

  get checkLocalStorageItemLogin() {
    return localStorage.getItem('currentLogginUser') ? true : false;
  }
  get isloggedBehaiviorSub(): Observable<boolean> {
    return this.islogInsideServices.asObservable();
  }
  get getUserRolelogged(){
    if (localStorage.getItem("currentLogginUser")) {
      let role=JSON.parse(localStorage.getItem("currentLogginUser")!);
      return role.role;
    }
    
  }
  get getUserDataLocalStorage(){
    if (localStorage.getItem("currentLogginUser")) {
      let user=JSON.parse(localStorage.getItem("currentLogginUser")!);
      return user;
    }
    
  }
   getBehaviorUserRole():Observable<any>{
    return this.logedUserData.asObservable();
   }
}
