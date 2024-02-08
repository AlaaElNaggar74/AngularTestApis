import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-mobile',
  templateUrl: './multi-mobile.component.html',
  styleUrls: ['./multi-mobile.component.css'],
})
export class MultiMobileComponent {
  formMultiPhones: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.formMultiPhones = this._fb.group({
      fname: this._fb.control('', [Validators.required]),
      lname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      conPassword: this._fb.control('', [Validators.required]),
      multiPhoneNumbers: this._fb.array([
        _fb.control('', [Validators.required]),
      ]),
    });
  }
  ngOnChanges() {}
  ngOnInit() {}
  ngOnChecked() {}
  ngContentInit() {}
  ngContentChecked() {}
  ngViewInit() {}
  ngViewChecked() {}
  ngOnDestroy() {}

  get fname() {
    return this.formMultiPhones.get('fname');
  }

  get lname() {
    return this.formMultiPhones.get('lname');
  }

  get password() {
    return this.formMultiPhones.get('password');
  }

  get conPassword() {
    return this.formMultiPhones.get('conPassword');
  }

  get multiPhoneNumbers() {
    return this.formMultiPhones.get('multiPhoneNumbers') as FormArray;
  }
  onFromMutliPhoneSub() {
    console.log('on-From-Mutli-Phone-Sub', this.formMultiPhones.value);
  }

  addNewNumber(event: any, inputPhone: any) {
    if (inputPhone.value.trim() == ' ' || inputPhone.value.trim() == '') {
    } else {
      console.log('addNewNumber');
      let buttonEle = event.target;
      let operaterCheck = event.target.innerHTML.trim();
      // console.log("Operater",Operater);

      // /// /// there are error because the innerHTML Has space
      // // // in comparason the codition alwayas false
      // /// // so in any comparason for string should make trim();

      if (operaterCheck == '+') {
        buttonEle.innerHTML = '-';
        buttonEle.classList.remove('btn-success');
        buttonEle.classList.add('btn-danger');
        inputPhone.setAttribute('disabled', 'true');
        this.multiPhoneNumbers.push(this._fb.control(''));
      } else {
        let i = 0;
        this.multiPhoneNumbers.controls.forEach((ele: any, index: any) => {
          if (index == inputPhone.name) {
            this.multiPhoneNumbers.removeAt(i);
          }
          i++;
        });

        console.log(
          'this.multiPhoneNumbers.controls.length',
          this.multiPhoneNumbers.length
        );
      }
    }
    if (this.multiPhoneNumbers.controls.length == 1) {
      this.multiPhoneNumbers.get([0])?.addValidators([Validators.required]);
    }
    this.multiPhoneNumbers.get([0])?.updateValueAndValidity();
  }
}
