import { Component } from '@angular/core';
import { ShoppingCardService } from '../services/allServ/shopping-card.service';

@Component({
  selector: 'app-admin-pors',
  templateUrl: './admin-pors.component.html',
  styleUrls: ['./admin-pors.component.css']
})
export class AdminPorsComponent {
  constructor(private _ShoppingCardService:ShoppingCardService){}

  add(){
    this._ShoppingCardService.addFun();
  }
  sub(){
    this._ShoppingCardService.subFun();
  }
}
