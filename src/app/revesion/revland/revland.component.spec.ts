import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevlandComponent } from './revland.component';

describe('RevlandComponent', () => {
  let component: RevlandComponent;
  let fixture: ComponentFixture<RevlandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevlandComponent]
    });
    fixture = TestBed.createComponent(RevlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
