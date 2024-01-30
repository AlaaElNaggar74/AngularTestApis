import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentt } from './home.component';

describe('HomeComponentt', () => {
  let component: HomeComponentt;
  let fixture: ComponentFixture<HomeComponentt>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponentt]
    });
    fixture = TestBed.createComponent(HomeComponentt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
