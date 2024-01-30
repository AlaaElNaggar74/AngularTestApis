import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aside-pro',
  templateUrl: './aside-pro.component.html',
  styleUrls: ['./aside-pro.component.css'],
})
export class AsideProComponent {
  @Input() hideValueChild = false;
  bol: any;
  @Output() bolEmitter:EventEmitter<boolean>;

  constructor(){
    this.bolEmitter=new EventEmitter<boolean>();
  }
  ngOnChanges() {
    this.bol = this.hideValueChild;
    console.log('this.bol=', this.bol);
    console.log('this.hideValueChild=', this.hideValueChild);
  }

  changeBol(){
    this.bol = !this.bol;
    this.bolEmitter.emit(this.bol);
  }

}
