import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeeProComponent } from './homee-pro.component';

describe('HomeeProComponent', () => {
  let component: HomeeProComponent;
  let fixture: ComponentFixture<HomeeProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeeProComponent]
    });
    fixture = TestBed.createComponent(HomeeProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
