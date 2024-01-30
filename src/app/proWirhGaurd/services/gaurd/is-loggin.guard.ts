import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { AuthService } from '../allServ/auth.service';

export const isLogginGuard: CanActivateFn = (route, state) => {
  
  let islog = inject(AuthService);
  let RouteClone = inject(Router);

  if (islog.checkLocalStorageItemLogin) {
    RouteClone.navigate(['service-gaurd/sechome']);
    return false;
  }

  return true;
};
