import { ShoppingCardService } from './../services/allServ/shopping-card.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
})
export class AddCardGaurdComponent {
  numberOfElement: number = 0;
  constructor(private _ShoppingCardService: ShoppingCardService) {
    _ShoppingCardService.count.subscribe((count: number) => {
      this.numberOfElement = count;
    });
  }
}
