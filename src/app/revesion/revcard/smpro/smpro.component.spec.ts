import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmproComponent } from './smpro.component';

describe('SmproComponent', () => {
  let component: SmproComponent;
  let fixture: ComponentFixture<SmproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmproComponent]
    });
    fixture = TestBed.createComponent(SmproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
