import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotAuthComponent } from './admin-not-auth.component';

describe('AdminNotAuthComponent', () => {
  let component: AdminNotAuthComponent;
  let fixture: ComponentFixture<AdminNotAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNotAuthComponent]
    });
    fixture = TestBed.createComponent(AdminNotAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
