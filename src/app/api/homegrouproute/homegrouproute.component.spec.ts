import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegrouprouteComponent } from './homegrouproute.component';

describe('HomegrouprouteComponent', () => {
  let component: HomegrouprouteComponent;
  let fixture: ComponentFixture<HomegrouprouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomegrouprouteComponent]
    });
    fixture = TestBed.createComponent(HomegrouprouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
