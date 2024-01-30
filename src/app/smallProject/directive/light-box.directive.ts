import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective {
  direList: any;
  @Input('LightBox') primeColor: string = 'black';
  @Input('secColor') secColor: string = 'orange';
  @Input('xc') xc: string = 'green';

  constructor(private _ElementRef: ElementRef, private ren: Renderer2) {
    // _ElementRef.nativeElement.style.border = `5px solid ${this.xc}`;
    // console.log('_ElementRef', _ElementRef.nativeElement.querySelector('.dire'));
    // this.direList =
    //   this._ElementRef.nativeElement.getElementsByClassName('dire');
    // console.log('_ElementRef-init', this.direList);
  }

  ngOnChanges() {
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.primeColor}`;
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.xc}`;
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.primeColor}`;
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.xc}`;
    this._ElementRef.nativeElement.style.border = `5px solid ${this.primeColor}`;

  }
  ngOnInit() {
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.primeColor}`;
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.xc}`;
  }
  ngAfterViewInit() {
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.primeColor}`;
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.xc}`;
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.xc}`;
    // Array.from(this.direList).forEach((element: any) => {
    //   element.style.border = `5px solid ${this.xc}`;
    // });
  }
  ngAfterViewChecked() {
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.primeColor}`;
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.xc}`;
    // this._ElementRef.nativeElement.style.border = `5px solid ${this.xc}`;
  }

  // @HostListener('click', ['$event']) mou(event: any) {
  //   // this._ElementRef.nativeElement.style.border = `5px solid ${this.primeColor}`;
  //   if (event.target.classList.contains('dire')) {
  //     Array.from(this.direList).forEach((element: any) => {
  //       element.style.border = `5px solid ${this.xc}`;
  //     });

  //     event.target.style.border = `5px solid ${this.primeColor}`;
  //   }
  //   console.log('event.target', event.target);
  // }

  @HostListener('mouseenter', ['$event']) mous() {
    this._ElementRef.nativeElement.style.border = `5px solid ${this.xc}`;
  }

  @HostListener('mouseleave', ['$event']) mousover() {
    // this._ElementRef.nativeElement.style.border = `5px solid black`;
    this._ElementRef.nativeElement.style.border = `5px solid ${this.primeColor}`;
  }

}
