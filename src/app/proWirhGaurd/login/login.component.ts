import { AuthService } from './../services/allServ/auth.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginGaurdComponent {
  email: string;
  password: string;
  gaurdValue: string = '';
  validatePassword:string='';
  validateEmail:string='';
  constructor(
    private _Location: Location,
    private _AuthService: AuthService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {
    this.email = '';
    this.password = '';

//
    _ActivatedRoute.queryParamMap.subscribe((queryParamMap:any)=>{
            this.gaurdValue = queryParamMap.params.message;
            this.validatePassword = queryParamMap.params.passord;
            this.validateEmail = queryParamMap.params.email;
     
    });
    // console.log("_ActivatedRoute",_ActivatedRoute?.snapshot?.paramMap?.get('message'));

    // _ActivatedRoute.paramMap.subscribe((paramsMap: any) => {
    //   this.gaurdValue = paramsMap.params.message;
    //   console.log(this.gaurdValue);
      
    // });

    // console.log("_ActivatedRoute",_ActivatedRoute?.snapshot?.paramMap?.get('message'));

    // this.gaurdValue=_ActivatedRoute?.snapshot?.paramMap?.get('message');
    // const navigation = _Router.getCurrentNavigation();
    // // console.log("getCurrentNavigation",navigation?.extras?.state?.['message']);
    // console.log("getCurrentNavigation",navigation);
    // this.gaurdValue=navigation?.extras.state?.['message'];

    // _ActivatedRoute.paramMap.subscribe((params:any)=>{

    //   // this.gaurdValue=params.id;
    //   console.log("params",params);

    // });
  }

  onSubmitt(event: any) {
    let userInfo = {
      email: this.email,
      password: this.password,
    };
    (this.email = ''),
      (this.password = ''),
      this._AuthService.logginGaurd(userInfo);
  }

  // onSubmitt(event: any) {
  //   console.log('email', this.email);
  //   console.log('password', this.password);
  //   // console.log('Events', event);
  //   let userInfo = {
  //     email: this.email,
  //     password: this.password,
  //   };
  //   localStorage.setItem('GaurdDetails', JSON.stringify(userInfo));
  // }

  backFun() {
    this._Location.back();
  }
}
