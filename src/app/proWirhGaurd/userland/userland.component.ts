import { Component } from '@angular/core';
import { ShoppingCardService } from '../services/allServ/shopping-card.service';

@Component({
  selector: 'app-userland',
  templateUrl: './userland.component.html',
  styleUrls: ['./userland.component.css']
})
export class UserlandComponent {
  constructor(private _ShoppingCardService:ShoppingCardService){}

  add(){
    this._ShoppingCardService.addFun();
  }
  sub(){
    this._ShoppingCardService.subFun();
  }
}
