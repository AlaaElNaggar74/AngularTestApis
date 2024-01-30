import { Component } from '@angular/core';
import { JsonServiesService } from 'src/app/services/jsonServer/json-servies.service';
import * as productObj from 'src/assets/productJsonObject.json';
import { AppConfig } from 'src/config/config';
import { ProductList } from '../classes/product-list';
@Component({
  selector: 'app-jsonserver-test',
  templateUrl: './jsonserver-test.component.html',
  styleUrls: ['./jsonserver-test.component.css'],
})
export class JsonserverTestComponent {
  products: any;
  productObj: any = productObj;
  productClass: ProductList;
  rateValue = 0;

  imagePathLocal = `${AppConfig.imagePathConfig}red-leather-backpack.jpg`;
  logoPsathLocal = `${AppConfig.logoPathConfig}istockphoto.jpg`;
  aaa = `${AppConfig.qwe}binder_sa_logo.jpg`;

  constructor(private _jsonServiesService: JsonServiesService) {
    this.productClass = new ProductList(
      4,
      'OPPOF19',
      'OPPO F19 is officially announced on April 2021.',
      280,
      17.91,
      4.3,
      123,
      'OPPO',
      'smartphones',
      'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
      [
        'https://cdn.dummyjson.com/product-images/4/1.jpg',
        'https://cdn.dummyjson.com/product-images/4/2.jpg',
      
      ]
    );
    _jsonServiesService.getAllProducts().subscribe({
      next: (data: any) => {
        if (!data?.products) {
          console.log('_jsonServiesService', data);
          this.products = data;
        } else {
          console.log('_dummyjsoncom', data);
          this.products = data.products;
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });

    // // This code not like the above the code will make error like
    // // Property 'anyName' does not exist on type 'Observable<Response>'
    // // becuase the subscripe need object s {key:value[as arrow function]} like the above not need three function
    // _jJsonServiesService.getAllProducts().subscribe({
    //   next(data: any) {
    //     // console.log("_jJsonServiesService",value.products);
    //     this.products = data.products;
    //   },
    //   error(err){},
    //   complete() {},
    // });
  }

  arr(num: any) {
    return new Array(num);
  }
  rate(x: any) {
    this.rateValue = x + 1;
  }
}
