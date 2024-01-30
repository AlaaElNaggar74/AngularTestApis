import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApistestsService } from 'src/app/services/apistests.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css'],
})
export class ProducteditComponent {
  // singUpForm:any;
  fileToUpload: any;
  errArr = { name: [], codeNumber: [] };
  objectKeys = Object.keys;
  obj={};

  idEdit: any;

  constructor(
    private _FormBuilder: FormBuilder,
    private _ApistestsService: ApistestsService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this._ActivatedRoute.params.subscribe((params: any) => {
      console.log('pppppp', params['id']);
      this.idEdit = params['id'];
      this._ApistestsService
        .getallFromMyApisOneProd(params['id'])
        .subscribe((data: any) => {
          console.log('the ELEMENT', data.data);
          this.singUpForm.patchValue({
            name: data.data.name,
            price: data.data.price,
            description: data.data.description,
            codeNumber: data.data.codeNumber,
            smcategorieslab_id: data.data.smcategorieslab_id,
          });
        });
    });
  }
  singUpForm = this._FormBuilder.group({
    // name: ['', [Validators.required, Validators.minLength(5)]],
    name: ['', [Validators.required]],
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
    // console.log('aaaaaaa', this.singUpForm.value);
    // this.singUpForm.patchValue({ fileLogo: this.fileToUpload });
    // console.log('aaaaaaavvvvvvvv', this.singUpForm.value);

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
    // console.log('dataaa EDITD', data);
    // console.log('dataaaxxxxxxx', data.get('name').value);
    // console.log('dataaaxxxxxxx', data.get('price').value);
    // console.log('dataaaxxxxxxx', data.get('description').value);
    // console.log('dataaaxxxxxxx', data.get('codeNumber').value);
    // console.log('dataaaxxxxxxx', data.get('smcategorieslab_id').value);
    // console.log('dataaaxxxxxxx', data.get('logo').value);

    // console.log('this.idEdit', this.idEdit);

    var formDataEdit: any = new FormData();
    formDataEdit.append('id', this.idEdit);
    formDataEdit.append('name', data.get('name').value);
    formDataEdit.append('price', data.get('price').value);
    formDataEdit.append('description', data.get('description').value);
    formDataEdit.append('codeNumber', data.get('codeNumber').value);
    formDataEdit.append(
      'smcategorieslab_id',
      data.get('smcategorieslab_id').value
    );
    formDataEdit.append(
      'logo',
      data.get('fileSource').value,
      data.get('fileSource').value.name
    );

    this.obj = {
      id: this.idEdit,
      name: data.get('name').value,
      price: data.get('price').value,
      description: data.get('description').value,
      codeNumber: data.get('codeNumber').value,
      smcategorieslab_id: data.get('smcategorieslab_id').value,
      logo:data.get('fileSource').value,
    };

    // console.log('xxxxxxxxxxxxx', this.obj);

    //   for (var pair of formDataEdit.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]);
    //     console.log("formDataEdit.entries()",formDataEdit.entries());
    //     console.log("pair",pair);

    // }

    // formData.append('image', data.get('image').value);

    // console.log(formData);

    this._ApistestsService
      .putProductToMyApis(this.idEdit, formDataEdit)
      .subscribe({
        next: (data) => {
          this._Router.navigate(['/testapi']);
          // this._Router.navigate(['/something/create'], { queryParams: { user: this.user.id } });

          console.log('data', data);
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
