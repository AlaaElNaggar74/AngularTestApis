import { Component } from '@angular/core';
import { ShoppingCardService } from '../services/allServ/shopping-card.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  constructor(private _ShoppingCardService:ShoppingCardService){}

  add(){
    this._ShoppingCardService.addFun();
  }
  sub(){
    this._ShoppingCardService.subFun();
  }
}
