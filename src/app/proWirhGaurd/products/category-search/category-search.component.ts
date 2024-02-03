import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent {
  categoryId:number=0;
  @Output() getSearchName:EventEmitter<string>;

  constructor(){
    this.getSearchName=new EventEmitter<string>();
  }


  onSearchChange(event:any ){
    // console.log("event:HTMLInputElement",typeof event);
    // console.log("event:HTMLInputElement",event.target.value);
    this.getSearchName.emit(event.target.value);
    

  }

}
