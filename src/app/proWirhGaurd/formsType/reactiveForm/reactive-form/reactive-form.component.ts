import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { FormsTestService } from 'src/app/proWirhGaurd/services/allServ/forms-test.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  // newProduct: any = {
  //   fname: '',
  //   lname: '',
  //   email: '',
  //   mobile: '',
  //   salary: '',
  //   password: '',
  //   confirmPassword: '',
  //   image: '',
  //   checkboxInput: ''
  // };

  constructor(
    private _FormsTestService: FormsTestService,
    private _FormBuilder: FormBuilder
  ) {}
  formRegister: FormGroup = this._FormBuilder.group({
    fname: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
    lname: ['', [Validators.required]],
    mobile: [''],
    MultiMobile: this._FormBuilder.array([
      this._FormBuilder.control('', [Validators.required]),
    ]),
    address: this._FormBuilder.group({
      city: ['', [Validators.required]],
      country: [''],
      postCode: [''],
    }),
    email: [''],
    salary: [''],
    password: [''],
    confirmPassword: [''],
    rememberMe: [false],
    skills: this._FormBuilder.array([]),
    image: [''],
    referral: [''],
    otherReferral: [''],
  });
  // formRegist]r: FormGroup = this._FormBuilder.group({
  //   fname: this._FormBuilder.control('', [Validators.required]),
  //   lname: this._FormBuilder.control('', [Validators.required]),
  //   mobile: this._FormBuilder.control('', [Validators.maxLength(5)]),
  //   address:this._FormBuilder.group({
  //     city: this._FormBuilder.control(''),
  //     country: this._FormBuilder.control(''),
  //     postCode: this._FormBuilder.control(''),
  //   }),
  //   email: this._FormBuilder.control('', [Validators.email]),
  //   salary: this._FormBuilder.control('', [Validators.min(5000)]),
  //   password: this._FormBuilder.control(''),
  //   confirmPassword: this._FormBuilder.control(''),
  //   checkBox: this._FormBuilder.control(''),
  //   image: this._FormBuilder.control(''),
  // });
  // formRegister: FormGroup = new FormGroup({
  //   fname: new FormControl('', [Validators.required]),
  //   lname: new FormControl('', [Validators.required]),
  //   mobile: new FormControl('', [Validators.maxLength(5)]),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     country: new FormControl(''),
  //     postCode: new FormControl(''),
  //   }),
  //   email: new FormControl('', [Validators.email]),
  //   salary: new FormControl('', [Validators.min(5000)]),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   checkBox: new FormControl(''),
  //   image: new FormControl(''),
  // });

  get fname() {
    return this.formRegister.get('fname');
  }
  get lname() {
    return this.formRegister.get('lname');
  }
  get mobile() {
    return this.formRegister.get('mobile');
  }
  get MultiMobile() {
    return this.formRegister.get('MultiMobile') as FormArray;
  }

  // // // this chain with .controls wrong as when you need to add new control
  // // // should add it on form array not .controls
  // // // so the best practice is make formArray return as FormArray Only
  // // // and when you need to use controls in html or any place you can add it

  // get MultiMobile() {
  //   return (this.formRegister.get('MultiMobile') as FormArray).controls;
  // }

  get city() {
    return (this.formRegister.get('address') as FormGroup).get('city');
  }

  get country() {
    return (this.formRegister.get('address') as FormGroup).get('country');
  }

  get postCode() {
    // return (this.formRegister.get("address") as FormGroup).controls?.['postCode']; // // True But To Make All Input Same Using .get("")
    return (this.formRegister.get('address') as FormGroup).get('postCode');
  }
  get email() {
    return this.formRegister.get('email');
  }
  get salary() {
    return this.formRegister.get('salary');
  }
  get password() {
    return this.formRegister.get('password');
  }

  get confirmPassword() {
    return this.formRegister.get('confirmPassword');
  }

  get checkBox() {
    return this.formRegister.get('checkBox');
  }
  get image() {
    return this.formRegister.get('image');
  }
  // confirmPassword
  // checkBox
  // image

  get referral() {
    return this.formRegister.get('referral');
  }
  get otherReferral() {
    return this.formRegister.get('otherReferral');
  }
  get skills() {
    return this.formRegister.get('skills') as FormArray;
  }
  // otherReferral
  formSubmitUsing_NgModel() {
    // console.log('the Template From Submit Is form: ', form.form.value);
    // console.log('the Template From Submit Is : ', this.newProduct);
    let newObj = this.formRegister.value;
    // newObj.checkedBox=this.formRegister.value.checkBox;
    // console.log(this.formRegister.value.checkBox.ischecked);

    // console.log(newObj);
    // this.fname?.setValue('ahmed74');
    // this.postCode?.setValue('12345');
    // this.formRegister.patchValue({
    //   fname: 'hhhhhh',
    //   mobile: '00000000',
    //   address: {
    //     city: 'cccccccccccc',
    //   },
    // });
    // console.log(this.formRegister.value);
    console.log(
      'this.formRegister.value.MultiMobile',
      this.formRegister.value.MultiMobile
    );
    this._FormsTestService.addReactiveFormInputs(newObj).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  addNewNumber(event: any, inpttt: any) {
    if (event.target.innerHTML == 'del') {
      // this.MultiMobile.push(new FormControl(''));
      // console.log('event.target.id', event.target.id);

      let newArr = this.MultiMobile.controls.filter((ele: any, index) => {
        // console.log('ele', ele);
        return index != event.target.id;
      });

      this.MultiMobile.controls.length = 0;
      // this.MultiMobile.controls.clear();
      this.MultiMobile.controls.push(...newArr);
    } else {
      if (inpttt.value == '' || inpttt.value == '') {
      } else {
        // console.log('inpttt.value', inpttt.value);
        // console.log("this.MultiMobile.length",this.MultiMobile.length);
        // console.log("this.formRegister.value.MultiMobile",this.formRegister.value.MultiMobile);

        // console.log(event);

        this.MultiMobile.push(
          this._FormBuilder.control('', [Validators.required])
        );
        event.target.innerHTML = 'del';
        event.target.classList.remove('btn-success');
        event.target.classList.add('btn-danger');
        document
          .querySelector(`input[name=MultiMobile${event.target.id}]`)
          ?.setAttribute('disabled', 'true');
      }
    }
  }
  updateReferralOtherValidat() {
    if (this.referral?.value == 'Other') {
      this.otherReferral?.addValidators([Validators.required]);
    } else {
      this.otherReferral?.removeValidators([Validators.required]);
    }
    this.otherReferral?.updateValueAndValidity();
  }

  setSkillsValues(event: any) {
    if (event.target.checked) {
      // console.log('the checked box and the value', event.target.value);
      this.skills.push(this._FormBuilder.control(event.target.value));
      console.log('the checked -  this.skills.controls', this.skills.controls);
    } else {

      let value = event.target.value;
      // console.log('Number(event.target.id)', value);

      // // ****** // ***** // **** First Way to get newArr
      let newArr = this.skills.controls.filter((ele: any, index: any) => {
        console.log('ele[index]', ele.value);
        console.log('value', value);

        return ele.value != value;
      });

      if (newArr.length == 0) {
        console.log('newArr.length', newArr.length);
      // /// // /   this.skills.clear(); to make the array length 0

        // this.skills.setValue = 0;
        this.skills.get([0])?.setValue(''); // /// // willl make array length 1
      } else {
        console.log('newArr.length else', newArr.length);
        this.skills.controls.length = 0;
        console.log('this.skills.controls', this.skills.controls);
        console.log('newArr-filter', newArr);
        newArr.forEach((ele: any) => {
          this.skills.push(this._FormBuilder.control(ele.value));
        });
      }

      // // ****** // ***** // **** anthor way to get newArr
      // let i = 0; // // as any array start from zero
      // this.skills.controls.forEach((ele: any) => {
      //   if (ele.value == event.target.value) {
      //     this.skills.removeAt(i);
      //     // // in this example you make i increase after each check when
      //     // // you get the the codition that make if true
      //     // // in this time you also get the index of value you search about it
      //     // // and then you remove it using [ this.skills.removeAt(i) ]
      //   }
      //   i++;
      // });

      // console.log('this.skills.controls afteer push', this.skills.controls);
    }
  }
}
