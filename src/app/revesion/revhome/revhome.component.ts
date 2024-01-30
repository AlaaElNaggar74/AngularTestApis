import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-revhome',
  templateUrl: './revhome.component.html',
  styleUrls: ['./revhome.component.css'],
})
export class RevhomeComponent {
  // @ViewChild('myname') input:ElementRef;
  @ViewChild('myname') elemRef!: ElementRef;
  @ViewChild('eleScrol') eleScrol!: ElementRef;
  @ViewChild('mouseOver') mouseO!: ElementRef;
  @ViewChild('sssd') mouseOutIn!: ElementRef;
  startPosition: number = 0;
  ngAfterViewInit() {
    console.log(this.elemRef.nativeElement.innerHTML);
    if (window.scrollX == 1000) {
      document.body.style.backgroundColor = 'red';
    }
    this.mouseOutIn.nativeElement.style.border="5px solid black";
  }

  changeCont() {
    if (this.elemRef.nativeElement.innerHTML == 'YSE') {
      this.elemRef.nativeElement.innerHTML = 'NO';
      this.elemRef.nativeElement.classList.add('myClass');
    } else {
      this.elemRef.nativeElement.innerHTML = 'YSE';
    }
  }
  showClass() {
    console.log('*********', this.elemRef.nativeElement.classList);
  }
  changeBg() {
    // this.elemRef.nativeElement.classList.remove("btn");
    this.elemRef.nativeElement.classList.remove('btn-danger');
    this.elemRef.nativeElement.classList.add('btn-success');
    // this.elemRef.nativeElement.classList.remove("btn-danger");
    console.log('*********', this.elemRef.nativeElement.classList);
  }

  scrolUp() {
    // window.scrollTo(0, 0);
    console.log(window.scrollY);
    // this.eleScrol.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  // @HostListener('scroll', ['$event']) onScroll(e: any) {
  //   console.log(window.scrollY);
  // }
  //   @HostListener("scroll", ['$event.target'])
  // onContentScrolled(e: HTMLElement) {
  //   // let scroll = e.scrollTop;
  //   // if (scroll > this.currentPosition) {
  //     console.log("scrollDown");
  //   // }
  // //    else {
  // //     console.log("scrollUp");
  // //   }
  // //   this.currentPosition = scroll;
  // }

  // @HostListener('window:scroll', ['$event'])
  //     doSomething(event:any) {
  //       // console.debug("Scroll Event", document.body.scrollTop);
  //       // see András Szepesházi's comment below
  //       console.debug("Scroll Event", window.pageYOffset );
  //     }

  // @HostListener('window:scroll', ['$event']) onSco() {
  //   console.log("window.scrollY",window.scrollY);
  // }

  changeText(event: any) {
    // console.log(event);
    event.target.style.border="5px solid red";
  }
  changeTextout(event: any) {
    // console.log(event);
    event.target.style.border="5px solid transparent";
  }

  // @HostListener('mouseO:mouseover', ['$event']) mouseX() {
  //   // console.log(event?.target);
  //   this.mouseO.nativeElement.style.border="5px solid red";

  // }



  
}
