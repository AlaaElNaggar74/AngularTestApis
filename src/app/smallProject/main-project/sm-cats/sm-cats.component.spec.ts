import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmCatsComponent } from './sm-cats.component';

describe('SmCatsComponent', () => {
  let component: SmCatsComponent;
  let fixture: ComponentFixture<SmCatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmCatsComponent]
    });
    fixture = TestBed.createComponent(SmCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
