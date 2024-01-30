import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevcardComponent } from './revcard.component';

describe('RevcardComponent', () => {
  let component: RevcardComponent;
  let fixture: ComponentFixture<RevcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevcardComponent]
    });
    fixture = TestBed.createComponent(RevcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
