import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFiveComponent } from './list-five.component';

describe('ListFiveComponent', () => {
  let component: ListFiveComponent;
  let fixture: ComponentFixture<ListFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFiveComponent]
    });
    fixture = TestBed.createComponent(ListFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
