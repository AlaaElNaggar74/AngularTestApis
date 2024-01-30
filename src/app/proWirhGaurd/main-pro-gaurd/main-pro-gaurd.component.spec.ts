import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProGaurdComponent } from './main-pro-gaurd.component';

describe('MainProGaurdComponent', () => {
  let component: MainProGaurdComponent;
  let fixture: ComponentFixture<MainProGaurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainProGaurdComponent]
    });
    fixture = TestBed.createComponent(MainProGaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
