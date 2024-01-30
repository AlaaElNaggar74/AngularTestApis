import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorServicesService } from '../testServices/storage/stor-services.service';

export const authGaurdGuard: CanActivateFn = (route, state) => {
  const instanceStorServ = inject(StorServicesService);
  const instanceRout = inject(Router);

  if (instanceStorServ.islogin) {
    return true;
  }
  instanceRout.navigate(['/smallproject/testobserve'])
  return false;
};
