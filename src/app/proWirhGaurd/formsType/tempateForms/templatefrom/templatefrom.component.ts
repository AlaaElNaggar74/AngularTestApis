import { FormsTestService } from './../../../services/allServ/forms-test.service';
import { Component } from '@angular/core';
import { InterfaceProducts } from 'src/app/smallProject/models/interface-products';

@Component({
  selector: 'app-templatefrom',
  templateUrl: './templatefrom.component.html',
  styleUrls: ['./templatefrom.component.css'],
})
export class TemplatefromComponent {
  // newProduct:InterfaceProducts={} as InterfaceProducts;
  newProduct: any = {
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    salary: '',
    password: '',
    confirmPassword: '',
    image: '',
    checkboxInput: '',
  };
  constructor(private _FormsTestService: FormsTestService) {}

  formSubmitUsing_NgModel() {
    // console.log('the Template From Submit Is form: ', form.form.value);
    console.log('the Template From Submit Is : ', this.newProduct);
    this._FormsTestService.addTemplateFormInputs(this.newProduct).subscribe({
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


  // formSubmitUsing_NgModel(form: any) {
  //   // console.log('the Template From Submit Is form: ', form.form.value);
  //   console.log('the Template From Submit Is : ', this.newProduct);
  // }

  formSubmitUsing_TemplateRefe(
    fname: any,
    lname: any,
    email: any,
    mobile: any,
    salary: any,
    password: any,
    confirmPassword: any,
    image: any,
    checkbox: any
  ) {
    let tempFormInpust = {
      fname: fname,
      lname: lname,
      email: email,
      mobile: mobile,
      salary: salary,
      password: password,
      confirmPassword: confirmPassword,
      image: image,
      checkboxInput: checkbox,
    };
    console.log('the Template From Submit Is : ', tempFormInpust);
  }
}
