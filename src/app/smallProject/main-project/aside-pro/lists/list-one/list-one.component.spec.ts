import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneComponent } from './list-one.component';

describe('ListOneComponent', () => {
  let component: ListOneComponent;
  let fixture: ComponentFixture<ListOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOneComponent]
    });
    fixture = TestBed.createComponent(ListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
