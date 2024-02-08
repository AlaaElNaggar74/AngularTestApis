import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCustomValidateComponent } from './test-custom-validate.component';

describe('TestCustomValidateComponent', () => {
  let component: TestCustomValidateComponent;
  let fixture: ComponentFixture<TestCustomValidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCustomValidateComponent]
    });
    fixture = TestBed.createComponent(TestCustomValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
