import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevhomeComponent } from './revhome.component';

describe('RevhomeComponent', () => {
  let component: RevhomeComponent;
  let fixture: ComponentFixture<RevhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevhomeComponent]
    });
    fixture = TestBed.createComponent(RevhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
