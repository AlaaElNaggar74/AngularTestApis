import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditProComponent } from './admin-edit-pro.component';

describe('AdminEditProComponent', () => {
  let component: AdminEditProComponent;
  let fixture: ComponentFixture<AdminEditProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditProComponent]
    });
    fixture = TestBed.createComponent(AdminEditProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
