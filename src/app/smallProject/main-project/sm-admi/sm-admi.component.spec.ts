import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmAdmiComponent } from './sm-admi.component';

describe('SmAdmiComponent', () => {
  let component: SmAdmiComponent;
  let fixture: ComponentFixture<SmAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmAdmiComponent]
    });
    fixture = TestBed.createComponent(SmAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
