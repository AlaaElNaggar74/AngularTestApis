import { Component, EventEmitter, Output } from '@angular/core';
import { ApiCategoryService } from '../../services/allServ/api-category.service';
import { InterfaceCategory } from 'src/app/smallProject/models/interface-category';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css'],
})
export class CategorySelectComponent {
  categoryId: number = 0;
  allCategory: InterfaceCategory[] | undefined = undefined;
  @Output('getSlect') getSlect: EventEmitter<number>;

  constructor(private _ApiCategoryService: ApiCategoryService) {
    this.getSlect = new EventEmitter<number>();

    _ApiCategoryService.getAllCategory().subscribe({
      next: (data: any) => {
        this.allCategory = data;
      },
      error: (error: any) => {
        console.log('CategorySelectComponent-ERROR', error);
      },
      complete: () => {
        console.log('CategorySelectComponent-complete');
      },
    });
  }

  onSelectValuChang() {
    this.getSlect.emit(this.categoryId);
  }
}
