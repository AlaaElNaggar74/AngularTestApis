import { inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { AsynValidateEmailService } from '../../services/allServ/asyn-validate-email.service';
import { Observable, map } from 'rxjs';

export function asyncEmailExist(): AsyncValidatorFn {
  let AsynValidateServ = inject(AsynValidateEmailService);
  let ValidationErrors = {
    emailErrors: {
      value: 'The Email Is Already Teaken Try Anthor One . . .',
    },
  };
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return AsynValidateServ.checkExistEmail(control.value).pipe(
      map((result: Boolean) => (result ? ValidationErrors : {}))
    );
  };
}
