import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHomePageComponent } from './sec-home-page.component';

describe('SecHomePageComponent', () => {
  let component: SecHomePageComponent;
  let fixture: ComponentFixture<SecHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecHomePageComponent]
    });
    fixture = TestBed.createComponent(SecHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
