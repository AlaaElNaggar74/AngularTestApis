import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesGaurdComponent } from './categories.component';

describe('CategoriesGaurdComponent', () => {
  let component: CategoriesGaurdComponent;
  let fixture: ComponentFixture<CategoriesGaurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesGaurdComponent]
    });
    fixture = TestBed.createComponent(CategoriesGaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
