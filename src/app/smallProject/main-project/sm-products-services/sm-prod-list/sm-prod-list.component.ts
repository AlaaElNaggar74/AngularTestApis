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
import { ProServicesService } from '../services/pro-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sm-prod-list',
  templateUrl: './sm-prod-list.component.html',
  styleUrls: ['./sm-prod-list.component.css'],
})
export class SmProdListComponent {
  products: InterfaceProducts[];

  // selectedCategory: Number = 0;
  filterArray?: InterfaceProducts[];
  totaleProductsPrice: number = 0;

  domDate: Date = new Date();

  @ViewChild('eleRefPrice') eleRefPrice!: ElementRef;

  @Input() outerCatId: Number = 0;

  @Output('totalClicks') totalFromChildEmitter: EventEmitter<Number>;

  refPriceClassList: Array<HTMLCollection> = [];
  // OnePro!: InterfaceProducts;
  constructor(
    private _ElementRef: ElementRef,
    private _ProServicesService: ProServicesService,
    private _Router: Router
  ) {
    this.totalFromChildEmitter = new EventEmitter<Number>();

    this.products = _ProServicesService.getAllProSer_Internal();
    // this.filterArray = this.products;
    let OnePro = _ProServicesService.getOneProSer_Internal(1);
    console.log('getOneProSer_Internal', OnePro);
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
    this.filterArray = this._ProServicesService.getProsByCatIdSer_Internal(
      this.outerCatId
    );
  }

  onBuy(element: InterfaceProducts, countInput: HTMLInputElement) {
    this._ProServicesService.updatePro_Internal(element, countInput);
    // element.quantity -= Number(countInput.value);
    this.totaleProductsPrice += element.price * Number(countInput.value);
    countInput.value = '0';
    this.totalFromChildEmitter.emit(this.totaleProductsPrice);
  }
  addCart(element: InterfaceProducts) {
    element.isSelected = !element.isSelected;
    // this._ProServicesService.addNewPros_Internal(element);
    // this._ProServicesService.addNewPros_Internal({
    //   id: 11111,
    //   name: 'serv-product-111',
    //   price: 41,
    //   quantity: 1111,
    //   categoryId: 2,
    //   imagesUrl: 'https://cdn.dummyjson.com/product-images/24/thumbnail.jpg',
    //   isSelected: false,
    // });
  }
  viewProduct(product: InterfaceProducts) {
    // this._Router.navigated;
    // this._Router.navigateByUrl(`smallproject/smproductsservices/${pid}`);
    let Obj = {
      x: 'x',
      y: 'y',
      z: 'z',
    };

    this._Router.navigate(['smallproject/smproductsservices', product.id]);
    // this._Router.navigate(['smallproject/smproductsservices',product.id],{skipLocationChange:true});

    // this._Router.navigate(['smallproject/smproductsservices', product.id, Obj]);
    // this._Router.navigate(['smallproject/smproductsservices', product.id]);

    // this._Router.navigate([
    //   'smallproject/smproductsservices',
    //   product.id,
    //   product,

    // ]);
    // this._Router.navigate(['smallproject/smproductsservices']);
    console.log('pid', product.id);
  }
}
