import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApistestsService } from 'src/app/services/apistests.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css'],
})
export class ProductcreateComponent {
  // singUpForm:any;
  fileToUpload: any;
  errArr = { name: [], codeNumber: [] };
  objectKeys = Object.keys;

  constructor(
    private _FormBuilder: FormBuilder,
    private _ApistestsService: ApistestsService,
    private _Router: Router
  ) {}

  singUpForm = this._FormBuilder.group({
    // name: ['', [Validators.required, Validators.minLength(5)]],
    name: [''],
    price: ['', [Validators.required, Validators.max(1000)]],
    description: ['', []],
    codeNumber: ['', [Validators.required, Validators.max(100)]],
    smcategorieslab_id: ['', [Validators.required]],
    logo: ['', [Validators.required]],
    fileSource: ['', [Validators.required]],

    // address: this.formBuilder.group({
    //   city: ['', [Validators.required]],
    //   street: ['', [Validators.required]],
    //   pincode: ['', [Validators.required]],
    // })
  });

  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.singUpForm.patchValue({
        fileSource: file,
      });
    }
    // console.log(files.target.files[0]);
    // this.fileToUpload = files.target.files[0];
    // this.singUpForm.patchValue({ fileLogo: files.target.files[0] });
    // this.singUpForm.append('file', files.target.files[0], files.target.files[0].name);

    // this.fileToUpload=files.item(0);
    // const formData = new FormData();
    // formData.append('file', files.data);
    // file.inProgress = true;
  }
  get name() {
    return this.singUpForm.get('name');
  }

  get price() {
    return this.singUpForm.get('price');
  }

  get description() {
    return this.singUpForm.get('description');
  }

  get codeNumber() {
    return this.singUpForm.get('codeNumber');
  }

  get smcategorieslab_id() {
    return this.singUpForm.get('smcategorieslab_id');
  }

  get logo() {
    return this.singUpForm.get('logo');
  }

  onSubmit(data: any) {
    // if (this.objectKeys(this.errArr.name).length !== 0) {
    this.errArr = { name: [], codeNumber: [] };
    // }
    // this.singUpForm.patchValue({ fileLogo: this.fileToUpload });

    // formParams.append('file', this.fileToUpload,this.fileToUpload?.name)
    // console.log(typeof this.singUpForm.value.logo);
    // console.log(typeof this.singUpForm.value);
    // console.log(this.singUpForm.value.logo);
    console.log('aaaaaaa', this.singUpForm.value);
    // this.singUpForm.patchValue({ fileLogo: this.fileToUpload });
    console.log('aaaaaaavvvvvvvv', this.singUpForm.value);

    // this._ApistestsService
    //   .postProductToMyApis(this.singUpForm.value)
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    // console.log('singUpForm', this.singUpForm);

    ///*******************************************************

    /*
    price
description
codeNumber
smcategorieslab_id
logo
fileSource
    
    ********************* */
    // console.log('dataaa', data.get('name').value);

    var formData: any = new FormData();
    formData.append('name', data.get('name').value);
    formData.append('price', data.get('price').value);
    formData.append('description', data.get('description').value);
    formData.append('codeNumber', data.get('codeNumber').value);
    formData.append('smcategorieslab_id', data.get('smcategorieslab_id').value);
    formData.append(
      'logo',
      data.get('fileSource').value,
      data.get('fileSource').value.name
    );
    // formData.append('image', data.get('image').value);

    // console.log(formData);

    this._ApistestsService.postProductToMyApis(formData).subscribe({
      next: (data) => {
        this._Router.navigate(['/testapi']);
        // this._Router.navigate(['/something/create'], { queryParams: { user: this.user.id } });

        // console.log('data', data);
      },
      error: (err) => {
        // this.errArr.push(err.error);
        this.errArr = { ...this.errArr, ...err.error };
        // console.log('------------', this.errArr);
      },
      complete: () => console.log('done'),
    });
  }
}
