import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGaurdComponent } from './register-gaurd.component';

describe('RegisterGaurdComponent', () => {
  let component: RegisterGaurdComponent;
  let fixture: ComponentFixture<RegisterGaurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterGaurdComponent]
    });
    fixture = TestBed.createComponent(RegisterGaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
