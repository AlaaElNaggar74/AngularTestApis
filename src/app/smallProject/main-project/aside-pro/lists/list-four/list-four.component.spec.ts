import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFourComponent } from './list-four.component';

describe('ListFourComponent', () => {
  let component: ListFourComponent;
  let fixture: ComponentFixture<ListFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFourComponent]
    });
    fixture = TestBed.createComponent(ListFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
