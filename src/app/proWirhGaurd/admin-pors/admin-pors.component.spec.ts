import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPorsComponent } from './admin-pors.component';

describe('AdminPorsComponent', () => {
  let component: AdminPorsComponent;
  let fixture: ComponentFixture<AdminPorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPorsComponent]
    });
    fixture = TestBed.createComponent(AdminPorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
