import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGaurdComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsGaurdComponent;
  let fixture: ComponentFixture<ProductsGaurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsGaurdComponent]
    });
    fixture = TestBed.createComponent(ProductsGaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
