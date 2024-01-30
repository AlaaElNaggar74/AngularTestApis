import { Component } from '@angular/core';
import { ShoppingCardService } from '../services/allServ/shopping-card.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private _ShoppingCardService:ShoppingCardService){}

  add(){
    this._ShoppingCardService.addFun();
  }
  sub(){
    this._ShoppingCardService.subFun();
  }
}
