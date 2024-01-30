import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { InterfaceProducts } from 'src/app/smallProject/models/interface-products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  products: InterfaceProducts[];

  // selectedCategory: Number = 0;
  filterArray?: InterfaceProducts[];
  totaleProductsPrice:number=0;

  domDate: Date = new Date();

  @ViewChild('eleRefPrice') eleRefPrice!: ElementRef;

  @Input() outerCatId: Number = 0;

  @Output("totalClicks") totalFromChildEmitter:EventEmitter<Number>;


  refPriceClassList: Array<HTMLCollection> = [];

  constructor(private _ElementRef: ElementRef) {
    this.totalFromChildEmitter=new EventEmitter<Number>()
    this.products = [
      {
        id: 1,
        name: 'product-1',
        price: 32,
        quantity: 5,
        categoryId: 1,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/8/1.jpg',
        isSelected: false,
      },
      {
        id: 2,
        name: 'product-2',
        price: 41,
        quantity: 0,
        categoryId: 2,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/8/1.jpg',
        isSelected: false,
      },
      {
        id: 3,
        name: 'product-3',
        price: 95,
        quantity: 1,
        categoryId: 3,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/8/1.jpg',
        isSelected: false,
      },
      {
        id: 4,
        name: 'product-4',
        price: 102,
        quantity: 3,
        categoryId: 2,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/8/1.jpg',
        isSelected: false,
      },
      {
        id: 5,
        name: 'product-5',
        price: 740,
        quantity: 10,
        categoryId: 3,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/8/1.jpg',
        isSelected: false,
      },
      {
        id: 6,
        name: 'product-6',
        price: 50,
        quantity: 2,
        categoryId: 1,
        imagesUrl: 'https://cdn.dummyjson.com/product-images/8/1.jpg',
        isSelected: false,
      },
    ];

    this.filterArray = this.products;
  }

  ngOnChanges() {
    // this.vie.nativeElement.style.border="5px solid orange";
    this.filterProductByCategories();
  }
  ngOnInit() {}

  ngAfterViewInit() {
    // this.vie.nativeElement.style.border="5px solid orange";
    this.refPriceClassList =
      this.eleRefPrice.nativeElement.getElementsByClassName('refPrice');
    console.log('refPrice ClassList', this.refPriceClassList);
    // Array.from(this.refPriceClassList).forEach((ele:any)=>{
    //   ele.style.border="20px solid green";

    // })
  }

  @HostListener('click', ['$event']) listClick(event: any) {
    if (event.target.classList.contains('refPrice')) {
      Array.from(this.refPriceClassList).forEach((ele: any) => {
        // ele.style.border="20px solid green";
        ele.classList.add('border-black');
      });
      event.target.classList.remove('border-black');
      event.target.classList.add('border-danger');
    }
  }


  filterProductByCategories() {
    if (this.outerCatId == 0) {
      this.filterArray = this.products;
    } else {
      this.filterArray = this.products.filter(
        (ele: any) => ele.categoryId == this.outerCatId
      );
    }

    console.log(this.filterArray);
  }

  onBuy(element:InterfaceProducts,countInput:HTMLInputElement){
    element.quantity-=Number(countInput.value);
    this.totaleProductsPrice += element.price* Number(countInput.value) ;
    countInput.value='0';
    this.totalFromChildEmitter.emit(this.totaleProductsPrice);

  }
  addCart(element:InterfaceProducts){

    element.isSelected=!element.isSelected;
  }
}
