import { ApistestsService } from 'src/app/services/apistests.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css'],
})
export class ProdetailsComponent {
  prodId: any;
  routeSub: any;
  imageUrl="http://127.0.0.1:8000/images/smproducts/";
  logUrl="http://127.0.0.1:8000/images/serverImages/";
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ApistestsService: ApistestsService
  ) {
    this.routeSub = this._ActivatedRoute.params.subscribe((params) => {
      console.log(params); //log the entire params object
      console.log(params['id']); //log the value of id
      _ApistestsService
        .getallFromMyApisOneProd(params['id'])
        .subscribe((data) => {
          console.log('ONE-PRODUCTS', data);
          this.prodId=data.data
        });
    });

    console.log('ONE-PRODUCTS', this.prodId);
    // const id = this._ActivatedRoute.snapshot.paramMap.get('id');

    // _ApistestsService.getallFromMyApisOneProd(id).subscribe((data) => {
    //   console.log('ONE-PRODUCTS', data);
    // });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
