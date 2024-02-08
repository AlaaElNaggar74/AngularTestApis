import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirPasswordComponent } from './confir-password.component';

describe('ConfirPasswordComponent', () => {
  let component: ConfirPasswordComponent;
  let fixture: ComponentFixture<ConfirPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirPasswordComponent]
    });
    fixture = TestBed.createComponent(ConfirPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
