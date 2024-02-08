import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.css'],
})
export class RadioBoxComponent {
  formRadio: FormGroup;

  constructor() {
    this.formRadio = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      conPassword: new FormControl('', [Validators.required]),
      track: new FormControl('', [Validators.required]),
      otherTrack: new FormControl(''),
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

  get track() {
    return this.formRadio.get('track');
  }

  get otherTrack() {
    return this.formRadio.get('otherTrack');
  }

  onFormRadioSub() {
    console.log('on-Form-Radio-Sub', this.formRadio.value);
  }

  onRadioChange(event: any) {
    console.log('on-Radio-Change', event.target.value);
    if (event.target.value == 'other') {
      this.otherTrack?.addValidators([Validators.required]);
    } else {
      this.otherTrack?.removeValidators([Validators.required]);
    }
    this.otherTrack?.updateValueAndValidity();
  }
}
