import { Component } from '@angular/core';
import { InterfaceCategory } from '../../models/interface-category';

@Component({
  selector: 'app-sm-products-services',
  templateUrl: './sm-products-services.component.html',
  styleUrls: ['./sm-products-services.component.css']
})
export class SmProductsServicesComponent {
  categories: InterfaceCategory[];
  selectedCategory: Number = 0;
  totalChildProdPrice: Number = 0;

  constructor() {
    this.categories = [
      {
        id: 1,
        name: 'sport',
      },
      {
        id: 2,
        name: 'move',
      },
      {
        id: 3,
        name: 'tv',
      },
      {
        id: 4,
        name: 'Alaa',
      },
    ];
  }

  ngOnChanges() {}
  ngOnInit() {}

  totalToParent(event: Number) {
    this.totalChildProdPrice = event;
  }
}
