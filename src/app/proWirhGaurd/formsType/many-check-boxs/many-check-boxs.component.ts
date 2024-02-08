import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-many-check-boxs',
  templateUrl: './many-check-boxs.component.html',
  styleUrls: ['./many-check-boxs.component.css'],
})
export class ManyCheckBoxsComponent {
  fromChecking: FormGroup;
  constructor(private _FormBuilder: FormBuilder) {
    this.fromChecking = _FormBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      password: _FormBuilder.control('', [Validators.required]),
      conPassword: ['', [Validators.required]],
      skills: _FormBuilder.array([]),
    });
  }

  // /// // prepare the formControl To Use It In Easy Way In Html And TS
  get fname() {
    return this.fromChecking.get('fname');
  }
  get lname() {
    return this.fromChecking.get('lname');
  }
  get password() {
    return this.fromChecking.get('password');
  }
  get conPassword() {
    return this.fromChecking.get('conPassword');
  }

  get skills() {
    return this.fromChecking.get('skills') as FormArray;
  }

  // /// / Submit Form
  onFormCheckingSub() {
    console.log('onFormCheckingSub', this.fromChecking.value);
  }

  // ///  /// this First WAy easy way
  onCheckBoxChanges(event: any) {
    console.log('on-Check-Box-Changes', event.target.checked);

    if (event.target.checked) {
      this.skills.push(this._FormBuilder.control(event.target.value));
    } else {
      let fillterArra = this.skills.controls.filter(
        (ele: any) => ele.value != event.target.value
      );
      if (fillterArra.length == 0) {
        this.skills.clear();
        // // OR
        // (this.fromChecking.get('skills') as FormArray).get([0])?.setValue(null);
      } else {
        this.skills.controls.length = 0;
        fillterArra.forEach((ele: any) => {
          this.skills.push(this._FormBuilder.control(ele.value));
        });
      }
    }
  }

  // ///  /// this anthor easy way
  // onCheckBoxChanges(event: any) {
  //   console.log('on-Check-Box-Changes', event.target.checked);

  //   if (event.target.checked) {
  //     this.skills.push(this._FormBuilder.control(event.target.value));
  //   } else {
  //     let i = 0;
  //     this.skills.controls.forEach((element: any) => {
  //       if (element.value == event.target.value) {
  //         this.skills.removeAt(i);
  //       }
  //       i++;
  //     });
  //   }
  // }
}
