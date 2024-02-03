import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiProductsService } from '../../services/allServ/api-products.service';
import { ShoppingCardService } from '../../services/allServ/shopping-card.service';

@Component({
  selector: 'app-singl-product',
  templateUrl: './singl-product.component.html',
  styleUrls: ['./singl-product.component.css'],
})
export class SinglProductComponent {
  categoryId: number = 0;
  theUsedProduct: any;
  // theUsedProduct:object | null=null;
  // theUsedProduct:object | undefined=undefined;
  @Input() singleProduct: object | undefined;
  @Output() clickAddEvent: EventEmitter<string>;
  constructor(
    private _ApiProductsService: ApiProductsService,
    private _ShoppingCardService: ShoppingCardService
  ) {
    this.clickAddEvent = new EventEmitter<string>();
  }

  ngOnChanges() {
    this.theUsedProduct = this.singleProduct;
  }
  ngOnInit() {}

  clickAddCardBtn(Pid: any, CardStat: any) {
    // this.clickAddEvent.emit(this.theUsedProduct.name);
    console.log('clicked add to card');
    CardStat = !CardStat;
    let newCardState = {
      isSelected: CardStat,
    };
    this._ApiProductsService.editProduct(Pid, newCardState).subscribe({
      next: (data: any) => {
        this._ApiProductsService.getOneProduct(Pid).subscribe({
          next: (data: any) => {
            if (CardStat) {
              this._ShoppingCardService.addFun();
            } else {
              this._ShoppingCardService.subFun();
            }
            this.theUsedProduct = data;
            console.log('editProduct-next', data);
          },
          error: (error: any) => {
            console.log('editProduct-error', error);
          },
          complete: () => {
            console.log('editProduct-complete');
          },
        });
        console.log('editProduct-next', data);
      },
      error: (error: any) => {
        console.log('editProduct-error', error);
      },
      complete: () => {
        console.log('editProduct-complete');
      },
    });
  }
  testEventEmitFromChildOfChild() {
    this.clickAddEvent.emit(this.theUsedProduct.name);
  }
}
