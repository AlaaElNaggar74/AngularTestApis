import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObservaleComponent } from './test-observale.component';

describe('TestObservaleComponent', () => {
  let component: TestObservaleComponent;
  let fixture: ComponentFixture<TestObservaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestObservaleComponent]
    });
    fixture = TestBed.createComponent(TestObservaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
