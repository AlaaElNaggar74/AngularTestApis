import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyCheckBoxsComponent } from './many-check-boxs.component';

describe('ManyCheckBoxsComponent', () => {
  let component: ManyCheckBoxsComponent;
  let fixture: ComponentFixture<ManyCheckBoxsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManyCheckBoxsComponent]
    });
    fixture = TestBed.createComponent(ManyCheckBoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
