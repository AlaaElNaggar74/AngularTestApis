import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProServicesService } from '../sm-products-services/services/pro-services.service';
import { InterfaceProducts } from '../../models/interface-products';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pros-detils',
  templateUrl: './pros-detils.component.html',
  styleUrls: ['./pros-detils.component.css'],
})
export class ProsDetilsComponent {
  // prodWithId = {
  //   id: 101,
  //   name: 'serv-product-1',
  //   price: 32,
  //   quantity: 5,
  //   categoryId: 1,
  //   imagesUrl: 'https://cdn.dummyjson.com/product-images/28/1.jpg',
  //   isSelected: false,
  // };
  prodWithId: InterfaceProducts | undefined = undefined;
  // prodWithId: InterfaceProducts;
  PPid: number = 0;
  index: number = 0;
  // indexBool:boolean=false;
  AllProdIDS: number[] = [];
  AllProdToGetIndex: InterfaceProducts[] = [];

  constructor(
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _ProServicesService: ProServicesService,
    private _Location: Location
  ) {
    // console.log("_ActivatedRoute.url",_ActivatedRoute.url);
    // console.log("_ActivatedRoute.children",_ActivatedRoute.children);
    // console.log("_ActivatedRoute.component",_ActivatedRoute.component);
    // console.log("_ActivatedRoute.data",_ActivatedRoute.data);
    // console.log("_ActivatedRoute.firstChild",_ActivatedRoute.firstChild);
    // console.log("_ActivatedRoute.fragment",_ActivatedRoute.fragment);
    // console.log("_ActivatedRoute.outlet",_ActivatedRoute.outlet);
    // console.log("_ActivatedRoute.paramMap",_ActivatedRoute.paramMap);
    // console.log("_ActivatedRoute.params",_ActivatedRoute.params);
    // console.log("_ActivatedRoute.parent",_ActivatedRoute.parent);
    // console.log("_ActivatedRoute.pathFromRoot",_ActivatedRoute.pathFromRoot);
    // console.log("_ActivatedRoute.queryParamMap",_ActivatedRoute.queryParamMap);
    // console.log("_ActivatedRoute.queryParams",_ActivatedRoute.queryParams);
    // console.log("_ActivatedRoute.root",_ActivatedRoute.root);
    // console.log("_ActivatedRoute.routeConfig",_ActivatedRoute.routeConfig);
    // console.log("_ActivatedRoute.snapshot",_ActivatedRoute.snapshot);
    // console.log("_ActivatedRoute.snapshot.params",_ActivatedRoute.snapshot.params);
    // console.log("_ActivatedRoute.snapshot.params['id']",_ActivatedRoute.snapshot.params['id']);
    // console.log("_ActivatedRoute.title",_ActivatedRoute.title);
    // console.log("_ActivatedRoute.title",_ActivatedRoute.);
    // let id = _ActivatedRoute.snapshot.params['id']; // return type number
  }

  ngOnInit() {
    // this.PPid = Number(this._ActivatedRoute.snapshot.paramMap.get('id')); // return type string so should transform it to number
    this._ActivatedRoute.paramMap.subscribe((ParamsAsMap) => {
      this.PPid = Number(ParamsAsMap.get('id'));
      console.log('aaaaaaaaaaaa ', ParamsAsMap.get('id'));

      this.prodWithId = this._ProServicesService.getOneProSer_Internal(
        this.PPid
      );
    });
    this.AllProdIDS = this._ProServicesService.getAllProsIds_Internal();
    this.AllProdToGetIndex = this._ProServicesService.getAllProSer_Internal();
  }

  backStep() {
    // this._Location.assign('smallproject/smproductsservices');
    this._Location.back();
  }
  nextStep(event: HTMLElement) {
    this.index = this.AllProdIDS.findIndex((ele: number) => ele == this.PPid);

    if (this.index != this.AllProdIDS.length - 1) {
      let nextPr = this.AllProdIDS[this.index + 1];
      this._Router.navigate(['/smallproject/smproductsservices', nextPr]);
    } else {
      // event.setAttribute('disabled','')
    }

    // /// ///  //   Get Index Of Array // //
  // // // Using FindIndex 
  //   let index = this.AllProdToGetIndex.findIndex((ele) => ele.id == this.PPid);
  //   let nextIndex = this.AllProdToGetIndex[index + 1].id;
  //   this._Router.navigate(['/smallproject/smproductsservices', nextIndex]);
  }
  prevStep(event: HTMLElement) {
      this.index = this.AllProdIDS.findIndex((ele: number) => ele == this.PPid);
      // console.log(this.index);
      if (this.index != 0) {
        let nextPr = this.AllProdIDS[this.index - 1];
        this._Router.navigate(['/smallproject/smproductsservices', nextPr]);
        // console.log('ddddddddd', nextPr);
      } else {
      }


    // // Using FindIndex 
  //   let index = this.AllProdToGetIndex.findIndex(
  //     (ele): any => ele.id == this.PPid
  //   );
  //   let prevIndex = this.AllProdToGetIndex[index - 1].id;
  //   this._Router.navigate(['/smallproject/smproductsservices', prevIndex]);
  // }

    }

}
