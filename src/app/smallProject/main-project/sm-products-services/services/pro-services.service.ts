import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceProducts } from 'src/app/smallProject/models/interface-products';

// import { AppModule } from 'src/app/app.module';
@Injectable({
  providedIn: 'root',
})
export class ProServicesService {
  private products: InterfaceProducts[];
  constructor(private _HttpClient: HttpClient) {
    this.products = [
      {
        id: 101,
        name: 'serv-product-1',
        price: 32,
        quantity: 5,
        categoryId: 1,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/28/1.jpg',
        isSelected: false,
      },
      {
        id: 102,
        name: 'serv-product-2',
        price: 41,
        quantity: 0,
        categoryId: 2,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/24/thumbnail.jpg',
        isSelected: false,
      },
      {
        id: 103,
        name: 'serv-product-3',
        price: 95,
        quantity: 1,
        categoryId: 3,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/8/1.jpg',
        isSelected: false,
      },
      {
        id: 104,
        name: 'serv-product-4',
        price: 102,
        quantity: 3,
        categoryId: 2,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/8/1.jpg',
        isSelected: false,
      },
      {
        id: 105,
        name: 'serv-product-5',
        price: 740,
        quantity: 10,
        categoryId: 3,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/15/2.jpg',
        isSelected: false,
      },
      {
        id: 106,
        name: 'serv-product-6',
        price: 50,
        quantity: 2,
        categoryId: 1,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg',
        isSelected: false,
      },
    ];
  }

  getAllProSer_Internal(): InterfaceProducts[] {
    return this.products;
  }

  getOneProSer_Internal(Pid: Number): InterfaceProducts | undefined {
    return this.products.find((ele) => ele.id == Pid);
  }

  // //2- Work Good
  // getOneProSer_Internal(Pid: Number): InterfaceProducts | null {
  //   let obj=this.products.find((ele) => ele.id == Pid);
  //   return obj?obj:null;
  // }

  // //3- Work Good
  // getOneProSer_Internal(Pid: number): InterfaceProducts {
  //   return this.products.find((ele) => ele.id == Pid)!;
  // }

  getProsByCatIdSer_Internal(Cid: Number): InterfaceProducts[] {
    if (Cid == 0) {
      return this.products;
    }
    return this.products.filter((ele) => ele.categoryId == Cid);
  }

  addNewPros_Internal(NewPro: InterfaceProducts) {
    this.products.push(NewPro);
    console.log('***********///////', this.products);
  }
  updatePro_Internal(ThePro: InterfaceProducts, countInput: HTMLInputElement) {
    ThePro.quantity -= Number(countInput.value);
  }
  getAllProsIds_Internal(){
    return this.products.map((ele)=> ele.id);

    // console.log(this.products.map((ele,index)=> index));
    
    
    
  }
}
