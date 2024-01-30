import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConfig } from 'src/config/config';

@Injectable({
  providedIn: 'root',
})
export class TestObservService {
  apiLinkDummy = AppConfig.apiUrl_Dummy_Products;

  alaPro: Array<any> | undefined = undefined;

  titleCount: any;
  titleName: any;
  titleNameString: any = 'kkkk';

  private addCard: BehaviorSubject<number>;

  // titleCount:BehaviorSubject<any>;

  constructor(private _HttpClient: HttpClient) {
    this.addCard = new BehaviorSubject<number>(0);
    this.titleCount = { c: 0 };
    this.titleName = { name: 'xxxx' };
    this.alaPro = [
      {
        id: 1,
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
        images: [
          'https://cdn.dummyjson.com/product-images/1/1.jpg',
          'https://cdn.dummyjson.com/product-images/1/2.jpg',
          'https://cdn.dummyjson.com/product-images/1/3.jpg',
          'https://cdn.dummyjson.com/product-images/1/4.jpg',
          'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
        ],
      },
      {
        id: 2,
        title: 'iPhone X',
        description:
          'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
        images: [
          'https://cdn.dummyjson.com/product-images/2/1.jpg',
          'https://cdn.dummyjson.com/product-images/2/2.jpg',
          'https://cdn.dummyjson.com/product-images/2/3.jpg',
          'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
        ],
      },
      {
        id: 3,
        title: 'Samsung Universe 9',
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: 'Samsung',
        category: 'smartphones',
        thumbnail: 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
        images: ['https://cdn.dummyjson.com/product-images/3/1.jpg'],
      },
      {
        id: 4,
        title: 'OPPOF19',
        description: 'OPPO F19 is officially announced on April 2021.',
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: 'OPPO',
        category: 'smartphones',
        thumbnail: 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
        images: [
          'https://cdn.dummyjson.com/product-images/4/1.jpg',
          'https://cdn.dummyjson.com/product-images/4/2.jpg',
          'https://cdn.dummyjson.com/product-images/4/3.jpg',
          'https://cdn.dummyjson.com/product-images/4/4.jpg',
          'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
        ],
      },
    ];
    // _HttpClient.get(`${this.apiLinkDummy}products`).subscribe((data:any)=>{
    //   this.alaPro=data.products;
    //   console.log("this.alaPro=data.products;",this.alaPro);

    // });
  }

  getAllPro() {
    return this._HttpClient.get(`${this.apiLinkDummy}products`);
  }

  getAllProObj() {
    return this.alaPro;
  }

  editPro(obj: any) {
    // return 'alaaa-72';
    let newEd = this.alaPro?.find((ele: any) => ele.id == obj.id);
    if (newEd) {
      newEd.title = 'alaaa72';
    }
    console.log('neww obj', this.alaPro);
  }
  // editPro(obj: any) {
  //   return  'alaaa';
  // }

  get getCount() {
    return this.titleCount;
  }
  get getCountName() {
    return this.titleName;
  }

  useNam(nnn: any) {
    this.titleNameString = nnn;
  }
  addCount() {
    this.titleCount.c += 1;
    this.titleName.name = 'yyyyyy' + this.titleCount.c;
    console.log('this.titleCount.c+=1', this.titleCount);
    console.log('this.titleName', this.titleName);
    // this.addCard.next(this.addCard.value + 1);
  }

  subCount() {
    this.titleCount.c -= 1;
    console.log('this.titleCount.c-=1', this.titleCount);
    console.log('this.titleName', this.titleName);
    // this.addCard.next(this.addCard.value - 1);
  }
  getLogStause(): Observable<number> {
    return this.addCard.asObservable();
  }
  setAddCardValue(operator: string, valueOfChange: number) {
    if (operator == '+') {
      this.addCard.next(this.addCard.value + valueOfChange);
    } else {
      this.addCard.next(this.addCard.value - valueOfChange);
    }
  }
}
