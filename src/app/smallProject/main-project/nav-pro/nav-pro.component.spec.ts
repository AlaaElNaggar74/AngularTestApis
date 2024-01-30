import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProComponent } from './nav-pro.component';

describe('NavProComponent', () => {
  let component: NavProComponent;
  let fixture: ComponentFixture<NavProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavProComponent]
    });
    fixture = TestBed.createComponent(NavProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
