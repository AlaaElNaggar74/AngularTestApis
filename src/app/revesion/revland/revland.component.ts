import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-revland',
  templateUrl: './revland.component.html',
  styleUrls: ['./revland.component.css'],
})
export class RevlandComponent {
  x: any = 0;
  redValue:any="red";

arrNodeList:any;
  @ViewChild("ele") eleRef!:ElementRef;
@ViewChild("eleParent") eleParent!:ElementRef;
 
  constructor() {
    this.colec();
    this.x = 50;
  }
  ngOnInit() {
    // this.colec();
    // this.eleRef.nativeElement.innerHTML="AAAAAA";

  }
  
  ngAfterViewInit(){
    // this.colec();
    // this.eleRef.nativeElement.innerHTML="BBBBBBBBBBBBBB";
    this.eleRef.nativeElement.innerHTML="AAAAAA";
    console.log("this.eleRef.nativeElement" ,this.eleRef);
    // console.log("this.eleRef.nativeElement eleParent" ,this.eleParent);
    // console.log("this.eleRef.nativeElement eleParent" ,this.eleParent.nativeElement.childNodes);
    // this.arrNodeList.push(this.eleParent.nativeElement.childNodes);

  }
  colec() {
    
    let eleBtn = document.querySelectorAll('button');
    eleBtn.forEach((e) => {
      e.style.border = `5px solid ${this.redValue} `;
      e.style.color = 'red';
    });
  }
  changeBtnColor(event: any) {
    this.colec();
    console.log('But-Number', event.target.innerHTML);

    event.target.style.border = '5px solid black';
    event.target.style.color = 'black';
    // this.eleRef.nativeElement.innerHTML="oh";
  }
}
