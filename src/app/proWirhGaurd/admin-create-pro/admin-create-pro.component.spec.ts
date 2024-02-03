import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateProComponent } from './admin-create-pro.component';

describe('AdminCreateProComponent', () => {
  let component: AdminCreateProComponent;
  let fixture: ComponentFixture<AdminCreateProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCreateProComponent]
    });
    fixture = TestBed.createComponent(AdminCreateProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
