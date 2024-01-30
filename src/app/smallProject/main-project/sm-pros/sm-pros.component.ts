import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { InterfaceProducts } from '../../models/interface-products';
import { InterfaceCategory } from '../../models/interface-category';

@Component({
  selector: 'app-sm-pros',
  templateUrl: './sm-pros.component.html',
  styleUrls: ['./sm-pros.component.css'],
})
export class SmProsComponent {
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
    ];
  }

  ngOnChanges() {}
  ngOnInit() {}

  totalToParent(event: Number) {
    this.totalChildProdPrice = event;
  }
}
