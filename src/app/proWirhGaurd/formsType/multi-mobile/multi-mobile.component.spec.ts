import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiMobileComponent } from './multi-mobile.component';

describe('MultiMobileComponent', () => {
  let component: MultiMobileComponent;
  let fixture: ComponentFixture<MultiMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiMobileComponent]
    });
    fixture = TestBed.createComponent(MultiMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
