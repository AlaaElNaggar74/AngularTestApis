import { Component } from '@angular/core';
import { StorServicesService } from '../test-observale/testServices/storage/stor-services.service';
import { TestObservService } from '../test-observale/testServices/test-observ.service';

@Component({
  selector: 'app-nav-pro',
  templateUrl: './nav-pro.component.html',
  styleUrls: ['./nav-pro.component.css'],
})
export class NavProComponent {
  issLog: any;
  issLogBehSub: any;
  cccc: number = 0;
  constructor(
    private _StorServicesService: StorServicesService,
    private _TestObservService: TestObservService
  ) {
    this.issLog = _StorServicesService.islogin;
    _StorServicesService.isloginStatus.subscribe((data: any) => {
      this.issLogBehSub = data;
    });
    // _TestObservService.addCard.subscribe((data: any) => {
    //   this.cccc = data;
    // });

    _TestObservService.getLogStause().subscribe((data:any)=>{
      this.cccc=data;

    })
  }
}
