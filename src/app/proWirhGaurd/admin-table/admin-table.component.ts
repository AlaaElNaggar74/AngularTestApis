import { Component } from '@angular/core';
import { ShoppingCardService } from '../services/allServ/shopping-card.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent {
  constructor(private _ShoppingCardService:ShoppingCardService){}

  add(){
    this._ShoppingCardService.addFun();
  }
  sub(){
    this._ShoppingCardService.subFun();
  }
}
