import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsDetilsComponent } from './pros-detils.component';

describe('ProsDetilsComponent', () => {
  let component: ProsDetilsComponent;
  let fixture: ComponentFixture<ProsDetilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProsDetilsComponent]
    });
    fixture = TestBed.createComponent(ProsDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
