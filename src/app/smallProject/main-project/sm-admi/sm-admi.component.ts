import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { InterfaceProducts } from '../../models/interface-products';
import { InterfaceCategory } from '../../models/interface-category';

@Component({
  selector: 'app-sm-admi',
  templateUrl: './sm-admi.component.html',
  styleUrls: ['./sm-admi.component.css'],
})
export class SmAdmiComponent {
  typeBool: string = 'product';
  productListInterFace: InterfaceProducts[];
  categoryListInterFave: InterfaceCategory[];
  orderTotalPrice: number = 0;
  selectedCategory: number = 0;

  @ViewChild('prodBtn') prodBtn!: ElementRef;
  @ViewChild('catBtn') catBtn!: ElementRef;

  constructor() {
    this.productListInterFace = [
      {
        id: 100,
        name: 'iPhone 9',
        price: 100,
        quantity: 100,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/8/1.jpg',
        categoryId: 1,
        isSelected: false,
      },
      {
        id: 200,
        name: 'Samsung Universe 9',
        price: 200,
        quantity: 0,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/3/1.jpg',
        categoryId: 4,
        "isSelected":false,
      },
      {
        id: 300,
        name: 'OPPOF19',
        price: 300,
        quantity: 10,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/5/2.jpg',
        categoryId: 2,
        "isSelected":false,
      },
      {
        id: 400,
        name: 'HP Pavilion 15-DK1056WM',
        price: 400,
        quantity: 2,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/9/3.png',
        categoryId: 2,
        "isSelected":false,
      },
      {
        id: 500,
        name: 'Infinix INBOOK',
        price: 500,
        quantity: 0,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
        categoryId: 1,
        "isSelected":false,
      },
      {
        id: 600,
        name: 'Microsoft Surface Laptop 4',
        price: 600,
        quantity: 1,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/9/4.jpg',
        categoryId: 5,
        "isSelected":false,
      },
    ];
    this.categoryListInterFave = [
      {
        id: 1,
        name: 'Samsung',
      },
      {
        id: 2,
        name: 'Huawei',
      },
      {
        id: 3,
        name: 'Infinix',
      },
      {
        id: 4,
        name: 'laptops',
      },
    ];
  }

  // ngOnInit() {
  //   this.prodBtn.nativeElement.style.border = '3px solid red';
  // }

  ngAfterViewInit() {
    this.prodBtn.nativeElement.style.border = '3px solid red';
  }

  onChangesType(value: any) {
    this.typeBool = value;
    // console.log(this.typeBool);
    console.log('prodBtn.nativeElement', this.prodBtn.nativeElement);
    console.log('catBtn.nativeElement', this.catBtn.nativeElement);

    if (value == 'product') {
      this.prodBtn.nativeElement.style.border = '3px solid red';
      this.catBtn.nativeElement.style.border = '3px solid transparent';
    } else {
      this.catBtn.nativeElement.style.border = '3px solid red';
      this.prodBtn.nativeElement.style.border = '3px solid transparent';
    }
  }

  // buyFunction(inputField: HTMLInputElement, obj: any) {
  //   // console.log('count:any', typeof Number(count));
  //   // console.log('obj:object', obj.price);
  //   console.log(
  //     'obj:object.price + count:any ',
  //     obj.price * Number(inputField.value)
  //   );
  //   this.orderTotalPrice += obj.price * Number(inputField.value);
  //   obj.quantity-=Number(inputField.value);
  //   inputField.value = `0`;
  // }

  // // use it when this.productListInterFace define array of any
  // buyFunction(inputField: HTMLInputElement, obj: InterfaceProducts) {
  //   // console.log('inputField:any', typeof Number(inputField));
  //   // console.log('obj:object', obj.price);
  //   // console.log(
  //   //   'obj:object.price + inputField:any ',
  //   //   obj.price * Number(inputField)
  //   // );
  //   let ele = this.productListInterFace.find((ele) => ele.id == obj.id);
  //   ele!.quantity -= Number(inputField.value);
  //   this.orderTotalPrice += obj.price * Number(inputField.value);
  //   inputField.value = '0';

  //   console.log(ele);
  //   this.productListInterFace = [
  //     ...this.productListInterFace!,
  //     {
  //       id: ele!.id,
  //       name: ele!.name,
  //       price: ele!.price,
  //       quantity: ele!.quantity,
  //       imagesUrl: ele!.imagesUrl,
  //       categoryId: ele!.categoryId,
  //     },
  //   ];
  // }

  // In This Case Dont Need To Find Element and update the array of inerface on objects
  // when you send ele from html and modifiy it this will change in the array of interface
  buyFunction(inputField: HTMLInputElement, obj: InterfaceProducts) {
    if (obj!.quantity !== 0) {
      this.orderTotalPrice += obj.price * Number(inputField.value);
      obj!.quantity -= Number(inputField.value);
    }
    inputField.value = '0';
  }
}
