import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTwoComponent } from './list-two.component';

describe('ListTwoComponent', () => {
  let component: ListTwoComponent;
  let fixture: ComponentFixture<ListTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTwoComponent]
    });
    fixture = TestBed.createComponent(ListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
