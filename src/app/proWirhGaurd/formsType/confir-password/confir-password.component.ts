import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confir-password',
  templateUrl: './confir-password.component.html',
  styleUrls: ['./confir-password.component.css']
})
export class ConfirPasswordComponent {
  formRadio: FormGroup;

  constructor() {
    this.formRadio = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      conPassword: new FormControl('', [Validators.required]),
   
    });
  }

  get fname() {
    return this.formRadio.get('fname');
  }

  get lname() {
    return this.formRadio.get('lname');
  }

  get password() {
    return this.formRadio.get('password');
  }

  get conPassword() {
    return this.formRadio.get('conPassword');
  }


  onFormRadioSub() {
    console.log('on-Form-Radio-Sub', this.formRadio.value);
  }

 
}
