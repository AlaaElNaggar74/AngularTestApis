import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkEmailExits(emailList: Array<string>): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let ValidationErrors;
    emailList.forEach((ele: any) => {
      if (control.value.trim() == ele) {
        ValidationErrors = {
          emailErrors: {
            value: 'The Email Is Already Teaken Try Anthor One . . .',
          },
        };
      }
    });

    return ValidationErrors ? ValidationErrors : null;
  };
}

export function checkForAmazonWord(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let ValidationErrors = {
      amazonCheck: {
        value: 'The Word Contains The Word Amazon .',
      },
    };
    if (control.value.trim().toLowerCase().includes('amazon')) {
      return ValidationErrors;
    }
    return null;
  };
}
