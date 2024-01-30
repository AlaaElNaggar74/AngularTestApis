import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/allServ/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-gaurd',
  templateUrl: './register-gaurd.component.html',
  styleUrls: ['./register-gaurd.component.css'],
})
export class RegisterGaurdComponent {
  email: string;
  name: string;
  password: string;
  gaurdValue: string = '';
  constructor(
    private _Location: Location,
    private _AuthService: AuthService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {
    this.email = '';
    this.name = '';
    this.password = '';

    //
    _ActivatedRoute.queryParamMap.subscribe((queryParamMap: any) => {
      this.gaurdValue = queryParamMap.params.message;
    });
  }

  onSubmitt(event: any) {
    let userInfo = {
      name: this.name,
      email: this.email,
      password: this.password,
      role:"user"
    };
    (this.name = ''),
      (this.email = ''),
      (this.password = ''),
      this._AuthService.registerGaurd(userInfo);
  }

  backFun() {
    this._Location.back();
  }
}
