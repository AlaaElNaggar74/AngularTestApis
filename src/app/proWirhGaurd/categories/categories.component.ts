import { Component } from '@angular/core';
import { ApiCategoryService } from '../services/allServ/api-category.service';
import { InterfaceCategory } from 'src/app/smallProject/models/interface-category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesGaurdComponent {
  allCategory: InterfaceCategory[] =[];
  constructor(private _ApiCategoryService: ApiCategoryService) {}

  ngOnInit() {
    this._ApiCategoryService.getAllCategory().subscribe({
      next: (data: any) => {
        this.allCategory = data;
        console.log("CategoriesGaurdComponent-data",this.allCategory);
        
      },
      error: (error: any) => {
        console.log('CategoriesGaurdComponent-Error', error);
      },
      complete: () => {
        console.log('CategoriesGaurdComponent-complete');
      },
    });
  }
}
