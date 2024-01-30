import { Component } from '@angular/core';

@Component({
  selector: 'app-revcard',
  templateUrl: './revcard.component.html',
  styleUrls: ['./revcard.component.css'],
})
export class RevcardComponent {
  selectedId: any = 0;
  searchInpPar: any = '';
  searchInpChiClickedPar: any = '';
  totalaValue: any = 0;
  backGrColor = 'white';
  // newARR: Array<object> | null = null;
  newARR: any[] = [];
  // newARR!: Array<object>;
  categoryList: any = [
    {
      id: '1',
      name: 'movies',
      rate: '5',
    },
    {
      id: '2',
      name: 'Sport',
      rate: '4',
    },
    {
      id: '3',
      name: 'Series',
      rate: '1',
    },
    {
      id: '4',
      name: 'Drama',
      rate: '3',
    },
    {
      id: '5',
      name: 'Histroy',
      rate: '2',
    },
  ];

  constructor() {}

  onChange(event: any) {
    console.log('ddddd', event.target.value);
    this.backGrColor = event.target.value;
  }
  searchOnClick() {}
  searchInpParClickedFun(event: any) {
    this.searchInpChiClickedPar = event.target.value;
  }
  clacTotal(value: any) {
    this.totalaValue = value;
  }

  totalPriceInParent(event: any) {
    if (event.totalPric == 0) {
      this.newARR = [];
    } else {
      this.totalaValue = event.totalPric;
      this.newARR.push(event.objectOne);
    }
    console.log(event);
  }

  delet(element: any) {
    this.newARR = this.newARR.filter((ele) => ele.id != element.id);
    this.totalaValue -= element.price;
  }
  // delet(element: any) {
  //   if (this.newARR == null) {

  //   }else{
  //     this.newARR = this.newARR.filter((ele) => ele.id != element.id);
  //     this.totalaValue-=element.price;
  //   }

  // }
}
