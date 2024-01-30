import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, count } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCardService {
  countInseideServices: BehaviorSubject<number>;
  constructor() {
    this.countInseideServices = new BehaviorSubject<number>(0);
  }

  get count(): Observable<number> {
    return this.countInseideServices.asObservable();
  }

  addFun() {
    // this.countInseideServices.next(+1);
    if (this.countInseideServices.value != 10) {
      this.countInseideServices.next(this.countInseideServices.value + 1);
      
    }
  }
  subFun() {
    // this.countInseideServices.next(-1);
    if (this.countInseideServices.value != 0) {
      this.countInseideServices.next(this.countInseideServices.value - 1);
      
    }
  }
}
