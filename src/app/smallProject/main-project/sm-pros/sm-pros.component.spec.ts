import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmProsComponent } from './sm-pros.component';

describe('SmProsComponent', () => {
  let component: SmProsComponent;
  let fixture: ComponentFixture<SmProsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmProsComponent]
    });
    fixture = TestBed.createComponent(SmProsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
