import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmProductsServicesComponent } from './sm-products-services.component';

describe('SmProductsServicesComponent', () => {
  let component: SmProductsServicesComponent;
  let fixture: ComponentFixture<SmProductsServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmProductsServicesComponent]
    });
    fixture = TestBed.createComponent(SmProductsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
