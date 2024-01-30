import { AuthService } from './../services/allServ/auth.service';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navv',
  templateUrl: './navv.component.html',
  styleUrls: ['./navv.component.css'],
})
export class NavvComponent {
  isLogged: boolean = false;
  loggedRole: string = '';
  userData: any;

  constructor(private _Router: Router, private _AuthService: AuthService) {
    _AuthService.isloggedBehaiviorSub.subscribe((data) => {
      this.isLogged = data;
    });
    console.log(
      '_AuthService.getUserRolelogged',
      _AuthService.getUserRolelogged
    );

    this._AuthService.getBehaviorUserRole().subscribe((data: any) => {
      this.loggedRole = data.role;
      this.userData = data;
      console.log('rrrrrrrrooole', this.loggedRole);
    });
    // this._AuthService.getBehaviorUserRole().subscribe((data: any) => {
    //   this.loggedRole = data.role;
    //   this.userData = data;
    //   console.log('rrrrrrrrooole', this.loggedRole);
    // });

  }
  ngOnInit() {}
  logDirect() {
    if (this.isLogged) {
      this._AuthService.loggOutGaurd();
      this._Router.navigate(['/service-gaurd/loogaurd']);
    } else {
      this._Router.navigate(['/service-gaurd/loogaurd']);
    }
  }
}
