import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  categoryId: number = 0;
  childProdList: object | undefined = undefined;
  // @Input() productParentItem!:object;
  @Input() productParentItem: object | undefined;
  @Output() clickAddEvent: EventEmitter<string>;

  constructor() {
    this.clickAddEvent = new EventEmitter<string>();
  }

  ngOnChanges() {
    this.childProdList = this.productParentItem;
  }
  // ngOnInit() {
  //   this.childProdList=this.productParentItem;

  // }

  caryValue(event: any) {
    this.clickAddEvent.emit(event);
  }
}
