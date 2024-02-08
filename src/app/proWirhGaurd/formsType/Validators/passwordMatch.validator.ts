import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// ///  /// the name of the file of ts should has the same name of
// /// /// the function
// /// //  if you make file name confirmPassword.validator.ts
// //  //  the function name should be confirmPassword

// // // if you make the function name passwordMatch will cause problem

// so  file name should has the same name of function

// // /// In this case the form call this function and check the condition when user write
// /// // any word


// /// // If You Want To Use  passwordMatch AS Parameters 
// // // and also there is no parameters passed to function 
// // // in this case the validator in form group without ()
export const passwordMatch: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let password = control.get('password');
  let conPassword = control.get('conPassword');
  let ValidationErrors = {
    confrimErrors: {
      value: 'The Password And Confirm Password Dosent Match ',
    },
  };
  if (password && conPassword && password?.value !== conPassword?.value) {
    // console.log("ValidationErrors","111");

    return ValidationErrors;
  }
  //   console.log('ValidationErrors',"000");
  return null;
};

// /// ////
// // ////  If You need To write passwordMatch as function and also if you need to pass 
 /// // //  someThing Tofunction

export function passwordMatchFun(): ValidatorFn {
  return (controls: AbstractControl): ValidationErrors | null => {
    let password = controls.get('password');
    let conPassword = controls.get('conPassword');
    let ValidationErrors = {
      confrimErrors: {
        value: 'The Password And Confirm Password Dosent Match ',
      },
    };
    if (password && conPassword && password?.value !== conPassword?.value) {
      return ValidationErrors;
    }
    return null;
  };
}
