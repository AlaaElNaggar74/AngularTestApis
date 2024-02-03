import { ApiProductsService } from './../services/allServ/api-products.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceProducts } from 'src/app/smallProject/models/interface-products';

@Component({
  selector: 'app-admin-view-details-pro',
  templateUrl: './admin-view-details-pro.component.html',
  styleUrls: ['./admin-view-details-pro.component.css'],
})
export class AdminViewDetailsProComponent {
  prodIdDetails: any;
  prodObj: InterfaceProducts | null = null;
  constructor(
    private _Location: Location,
    private _ActivatedRoute: ActivatedRoute,
    private _ApiProductsService: ApiProductsService
  ) {
    // // Any [ SnapShot ] Will Not Work Good When Go To The Same Like
    // this.prodIdDetails=Number(_ActivatedRoute.snapshot.params['id']);
    // console.log("this.prodIdDetails", this.prodIdDetails);

    // this.prodIdDetails=Number(_ActivatedRoute.snapshot.paramMap.get("id"));
    // console.log("this.prodIdDetails", this.prodIdDetails);

    // _ActivatedRoute.params.subscribe((params: any) => {
    //   this.prodIdDetails=params['id'];
    //   console.log('params', params);
    //   console.log('this.prodIdDetails', this.prodIdDetails);
    // });

    _ActivatedRoute.paramMap.subscribe((paramMap: any) => {
      this.prodIdDetails = paramMap.params.id;
      // console.log('this.prodIdDetails', typeof this.prodIdDetails);
      // console.log("paramMap",paramMap);
    });
  }
  ngOnChanges() {}
  ngOnInit() {
    // // Get Product By id From JSON Server [ /id ] in services
    // // so the Return Always Be Array so to get elemet write data[0]
    // this._ApiProductsService.getOneProduct(this.prodIdDetails).subscribe({
    //   next: (data: any) => {
    //     this.prodObj=data[0];
    //     console.log('getOneProduct-data', data[0]);
    //   },
    //   error: (error: any) => {
    //     console.log('getOneProduct-Error', error);
    //   },
    //   complete: () => {
    //     console.log('getOneProduct-complete');
    //   },
    // });

    // // Get Product By Query Params From JSON Server [ ?id=${id} ] in services
    // // so the Return Always Be Array so to get elemet write data[0]
    this._ApiProductsService.getOneProduct(this.prodIdDetails).subscribe({
      next: (data: any) => {
        this.prodObj = data;
        console.log('getOneProduct-data', data);
      },
      error: (error: any) => {
        console.log('getOneProduct-Error', error);
      },
      complete: () => {
        console.log('getOneProduct-complete');
      },
    });
  }
  backStep() {
    this._Location.back();
  }
}
