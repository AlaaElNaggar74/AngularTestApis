import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css']
})
export class CategorySelectComponent {
  categoryId:number=0;

  @Output("getSlect") getSlect:EventEmitter<number>;

  constructor(){
    this.getSlect=new EventEmitter<number>();

  }


  onSelectValuChang(){

    this.getSlect.emit(this.categoryId);
  }
}
