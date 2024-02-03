import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDetailsProComponent } from './admin-view-details-pro.component';

describe('AdminViewDetailsProComponent', () => {
  let component: AdminViewDetailsProComponent;
  let fixture: ComponentFixture<AdminViewDetailsProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewDetailsProComponent]
    });
    fixture = TestBed.createComponent(AdminViewDetailsProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
