import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {

  @Input() totalItems: number = 0;
  @Input() pageSize: number = 0;
  @Output() pageChanged = new EventEmitter<PageEvent>();
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngOnChanges() {
    // this.onPageChange($event);
  }

  onPageChange(event: PageEvent) {
    this.pageChanged.emit(event);
  }

  // @Input() currentPage?: number;
  // @Input() totalPages?: number;

  // constructor() {}

  // ngOnInit(): void {}

  // onPageChange(page: number): void {
  //   console.log(`Page changed to ${page}`);
  // }
}
