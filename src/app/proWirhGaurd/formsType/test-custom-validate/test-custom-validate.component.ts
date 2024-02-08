import { AsynValidateEmailService } from './../../services/allServ/asyn-validate-email.service';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

import {
  checkEmailExits,
  checkForAmazonWord,
} from '../Validators/emailExist.validator';
import { asyncEmailExist } from '../Validators/asyncEmailExist.validator';
import { passwordMatch,passwordMatchFun } from '../Validators/passwordMatch.validator';

@Component({
  selector: 'app-test-custom-validate',
  templateUrl: './test-custom-validate.component.html',
  styleUrls: ['./test-custom-validate.component.css'],
})
export class TestCustomValidateComponent {
  formRadio: FormGroup;
  fnameCompare: any;
  emailListTest: Array<string>;
  allEmailAsync: Array<string> = [];

  constructor(private _AsynValidateEmailService: AsynValidateEmailService) {
    // _AsynValidateEmailService.alleMAIL().subscribe({
    //   next: (data: any) => {
    //     this.allEmailAsync = data;
    //     console.log(this.allEmailAsync);
    //   },
    //   error: (error: any) => {
    //     console.log('error', error);
    //   },
    //   complete: () => {
    //     console.log('complete');
    //   },
    // });
    this.emailListTest = [
      'alaa@gmail.com',
      'abdo@gmail.com',
      'elnaggar@gmail.com',
      'good@gmail.com',
      'fork@gmail.com',
    ];
    this.formRadio = new FormGroup({
      fname: new FormControl('', [Validators.required, checkForAmazonWord()]),
      lname: new FormControl('', [Validators.required]),
      // email: new FormControl('', [
      //   Validators.required,
      //   asyncEmailExist(),
      // ]),
      email: new FormControl('', [
        Validators.required,
        checkEmailExits(this.emailListTest),
      ]),
      password: new FormControl('', [Validators.required]),
      // conPassword: new FormControl('', this.confirmPassValidation(this.fnameCompare)),
      // conPassword: new FormControl('', this.confirmPassValidation()),
      conPassword: new FormControl(''),
    },{validators:passwordMatchFun() });
    /*
    Important Note :- 

    If you use in passwordMatch.validator.ts File
       as  export const passwordMatch: ValidatorFn = (
       You Should Use {validators:passwordMatch }

    else you use in passwordMatch.validator.ts File
       export function passwordMatch(): ValidatorFn {
       return
       You Should Use {validators:passwordMatch()}
    */
  }

  // get formRadioFun(){
  //   return this.formRadio;
  // }
  get fname() {
    return this.formRadio.get('fname');
  }

  get lname() {
    return this.formRadio.get('lname');
  }

  get email() {
    return this.formRadio.get('email');
  }

  get password() {
    return this.formRadio.get('password');
  }

  get conPassword() {
    return this.formRadio.get('conPassword');
  }

  // checkForAmazonWord(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     if (control.value.trim().toLowerCase().includes('amazon')) {
  //       return {
  //         amazonCheck: {
  //           value: 'The Word Contains The Word Amazon .',
  //         },
  //       };
  //     }
  //     return null;
  //   };
  // }

  // checkEmailExits(emailList: Array<string>): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     let errorsEmail;
  //     emailList.forEach((ele: any) => {
  //       if (control.value.trim() == ele) {
  //         errorsEmail = {
  //           emailErrors: {
  //             value: 'The Email Is Already Teaken Try Anthor One . . .',
  //           },
  //         };
  //       }
  //     });

  //     return errorsEmail ? errorsEmail : null;
  //   };
  // }

  // confirmPassValidation(xx:any): ValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors> | null => {
  //     let controlValu = control.value;
  //     if (controlValu == xx) {
  //       return null;
  //     } else {
  //   return setTimeout(()=>{
  //       return  {
  //           conPasswordCheck: {
  //             value: 'the password and confirmPassword dont identical',
  //           },
  //         };
  //       },2000);
  //     }
  //   };
  // }
  // confirmPassValidation(xx:any): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     let controlValu = control.value;
  //     if (controlValu == xx) {
  //       return null;
  //     } else {
  //       return {
  //         conPasswordCheck: {
  //           value: 'the password and confirmPassword dont identical',
  //         },
  //       };
  //     }
  //   };
  // }

  onFormRadioSub() {
    console.log('on-Form-Radio-Sub', this.formRadio.value);
  }
}
