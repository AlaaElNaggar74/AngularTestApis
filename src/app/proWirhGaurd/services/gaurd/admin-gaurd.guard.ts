import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../allServ/auth.service';

export const adminGaurdGuard: CanActivateFn = (route, state) => {
  let islog=inject(AuthService);
  let RouteClone=inject(Router);


  if (islog.getUserRolelogged == 'admin') {
    return true;
  }
  
  RouteClone.navigate(['service-gaurd/admin-not-autharized']);
  return false;
};
