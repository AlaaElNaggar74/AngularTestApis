import { StorServicesService } from './testServices/storage/stor-services.service';
import { TestObservService } from './testServices/test-observ.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-observale',
  templateUrl: './test-observale.component.html',
  styleUrls: ['./test-observale.component.css'],
})
export class TestObservaleComponent {
  products: any;
  coutTTT: any;
  coutName: any;
  coutNameString: any;
  isLoggg: boolean = false;
  constructor(
    private _TestObservService: TestObservService,
    private _StorServicesService: StorServicesService
  ) {
    this.products = _TestObservService.getAllProObj();
    // this.coutTTT=_TestObservService.titleCount.c;
    this.coutTTT = _TestObservService.getCount;
    this.coutName = _TestObservService.titleName;
    this.coutNameString = _TestObservService.titleNameString;
    this.isLoggg = this._StorServicesService.islogin;

    // this.coutName=_TestObservService.getCountName;

    // console.log("_TestObservService.getAllProObj()",_TestObservService.getAllProObj());

    // _TestObservService.getAllPro().subscribe({
    //   next: (data:any) => {
    //     this.products=data.products;
    //     console.log('Test Observale Component', data.products);
    //   },
    //   error: (error:any) => {
    //     console.log('Test Observale Component', error);
    //   },
    //   complete: () => {
    //     console.log('Test Observale Component ** ', 'complete');
    //   },
    // });
  }

  ed(ob: any) {
    this._TestObservService.editPro(ob);
    console.log('ed done');
  }
  // ed(ob:any){
  //   ob.title=this._TestObservService.editPro(ob);
  //   console.log("ed done");

  // }

  addd() {
    // this._TestObservService.addCount();
    // this._TestObservService.useNam('oooppp');
    this._TestObservService.setAddCardValue("+",5);
    console.log('add');
    
  }
  
  subb() {
    // this._TestObservService.subCount();
    this._TestObservService.setAddCardValue("-",5);
    console.log('sub');
  }

  loggin() {
    this._StorServicesService.login('alaa', 1994);
    this.isLoggg = this._StorServicesService.islogin;
  }
  loggout() {
    this._StorServicesService.logout();
    this.isLoggg = this._StorServicesService.islogin;
  }
}
