import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorycreateComponent } from './categorycreate.component';

describe('CategorycreateComponent', () => {
  let component: CategorycreateComponent;
  let fixture: ComponentFixture<CategorycreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorycreateComponent]
    });
    fixture = TestBed.createComponent(CategorycreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
