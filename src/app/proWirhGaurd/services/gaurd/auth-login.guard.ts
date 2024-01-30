import { inject } from '@angular/core';
import { CanActivateFn, NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../allServ/auth.service';

export const authLoginGuard: CanActivateFn = (route, state) => {
  let authCheck = inject(AuthService);
  let directRouter = inject(Router);
  let valueLog = false;
  authCheck.isloggedBehaiviorSub.subscribe((state: any) => {
    valueLog = state;
  });

  if (authCheck.checkLocalStorageItemLogin) {
    // directRouter.navigate(['/service-gaurd/vip-gu']);
    return true;
  }

  let obj = {
    message: 'Should Login First Because Gaurd',
    role: 'userLogin',
    name: 'Soltannnnnn  ',
  };

  // // Using Params 
  // directRouter.navigate(['/service-gaurd/loogaurd',obj]);

  // // Using QueryParams 
  directRouter.navigate(['/service-gaurd/loogaurd'],{queryParams:obj});

  // // Using  navigationExtras
  // const navigationExtras: NavigationExtras = {
  //   state: {
  //     message: 'Should Login First Because Gaurd',
  //     role:"userLogin",
  //     name:"Soltannnnnn  "
  //   },
  // };
  // directRouter.navigate(['/service-gaurd/loogaurd'], navigationExtras);
  return false;
};
