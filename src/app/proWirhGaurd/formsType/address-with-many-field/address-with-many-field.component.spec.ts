import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressWithManyFieldComponent } from './address-with-many-field.component';

describe('AddressWithManyFieldComponent', () => {
  let component: AddressWithManyFieldComponent;
  let fixture: ComponentFixture<AddressWithManyFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressWithManyFieldComponent]
    });
    fixture = TestBed.createComponent(AddressWithManyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
