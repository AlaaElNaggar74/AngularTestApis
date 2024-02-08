import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address-with-many-field',
  templateUrl: './address-with-many-field.component.html',
  styleUrls: ['./address-with-many-field.component.css'],
})
export class AddressWithManyFieldComponent {
  // // // in this place you identify the variable with type
  // // // and initialize it in constructor .
  registerFromAddreess: FormGroup;
  custErrors = {
    custName: '',
  };

  constructor(private _fb: FormBuilder) {
    this.registerFromAddreess = _fb.group({
      fname: _fb.control('', [Validators.required]),
      lname: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
      conPassword: [''],
      address: _fb.group({
        country: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z]{5,}')],
        ],
        city: ['', [Validators.required]],
        postcode: ['', [Validators.required]],
      }),
    });

    // this.registerFromAddreess=new FormGroup({
    //   fname:new FormControl('',[Validators.required]),
    //   lname:new FormControl(''),
    //   password:new FormControl(''),
    //   conPassword:new FormControl(''),
    //   address:new FormGroup({
    //     country:new FormControl(""),
    //     city:new FormControl(""),
    //     postcode:new FormControl('')
    //   })
    // });
  }

  get fname() {
    return this.registerFromAddreess.get('fname');
  }

  get lname() {
    return this.registerFromAddreess.get('lname');
  }
  get password() {
    return this.registerFromAddreess.get('password');
  }
  get conPassword() {
    return this.registerFromAddreess.get('conPassword');
  }

  // // // in address first transform it to form groub to get country and city and postcode

  get address() {
    return this.registerFromAddreess.get('address') as FormGroup;
  }

  // country
  // city
  // postcode

  // // after transform it to formGroup You Can Get Any Value Using .get("")
  get country() {
    return this.address.get('country');
  }
  get city() {
    return this.address.get('city');
  }
  get postcode() {
    return this.address.get('postcode');
  }

  onSubmitForm() {
    if (this.fname?.value == 'amazon') {
      console.log('this.fname?.errors', this.fname?.errors);
    } else {
      console.log('controls', this.registerFromAddreess.controls);
      console.log('value', this.registerFromAddreess.value);
    }
  }
  checkkk() {

    // //  // to make form invalid add any validator when the word contain amazon 
    // // //  and remove it after remove amazon 
    if (this.fname?.value.toLowerCase().includes('amazon')) {
      this.custErrors.custName = 'the name contain amazon';
      this.fname.addValidators([Validators.email]);
    } else {
      this.custErrors.custName = '';
      this.fname?.removeValidators([Validators.email]);
    }
    this.fname?.updateValueAndValidity();
  }
}
