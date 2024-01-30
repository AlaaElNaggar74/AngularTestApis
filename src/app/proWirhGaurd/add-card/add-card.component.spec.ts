import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardGaurdComponent } from './add-card.component';

describe('AddCardGaurdComponent', () => {
  let component: AddCardGaurdComponent;
  let fixture: ComponentFixture<AddCardGaurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCardGaurdComponent]
    });
    fixture = TestBed.createComponent(AddCardGaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
