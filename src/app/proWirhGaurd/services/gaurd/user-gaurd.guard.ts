import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../allServ/auth.service';
import { inject } from '@angular/core';

export const userGaurdGuard: CanActivateFn = (route, state) => {
  let islog=inject(AuthService);
  let RouteClone=inject(Router);


console.log("islog.getUserRolelogged",islog.getUserRolelogged);


  if (islog.getUserRolelogged == 'user') {
    return true;
  }
  
  RouteClone.navigate(['service-gaurd/user-not-autharized']);
  return false;
};
