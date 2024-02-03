import { Component } from '@angular/core';
import { ShoppingCardService } from '../services/allServ/shopping-card.service';
import { ApiProductsService } from '../services/allServ/api-products.service';
import { InterfaceProducts } from 'src/app/smallProject/models/interface-products';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css'],
})
export class AdminTableComponent {
  adminProducts: InterfaceProducts[] | undefined = undefined;
  constructor(
    private _ShoppingCardService: ShoppingCardService,
    private _ApiProductsService: ApiProductsService
  ) {}

  ngOnInit() {
    this._ApiProductsService.getAllProducts().subscribe({
      next: (data: any) => {
        this.adminProducts = data;
        console.log('AdminTableComponent-Data', data);
      },
      error: (error: any) => {
        console.log('AdminTableComponent-ERROR', error);
      },
      complete: () => {
        console.log('AdminTableComponent-Complete');
      },
    });
  }

  deleteFun(Pid: number) {
    console.log('Pid-Pid', Pid);
    this._ApiProductsService.deleteProduct(Pid).subscribe({
      next: (data: any) => {
        console.log('_ApiProductsService.deleteProduct', data);
        // // First Method By Using getAll products Services 
        // this._ApiProductsService.getAllProducts().subscribe({
        //   next: (data: any) => {
        //     this.adminProducts = data;
        //     console.log('AdminTableComponent-Data', data);
        //   },
        //   error: (error: any) => {
        //     console.log('AdminTableComponent-ERROR', error);
        //   },
        //   complete: () => {
        //     console.log('AdminTableComponent-Complete');
        //   },
        // });

        // The Second Way To Use Filter On Products Come From Get All product in constructor
        this.adminProducts=this.adminProducts?.filter((ele:any)=> ele.id !=data.id);
      },
      error: (error: any) => {
        console.log('deleteProduct-ERROR', error);
      },
      complete: () => {
        console.log('deleteProduct-Complete');
      },
    });
  }

  add() {
    this._ShoppingCardService.addFun();
  }
  sub() {
    this._ShoppingCardService.subFun();
  }
}
