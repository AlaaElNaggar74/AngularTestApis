import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonserverTestComponent } from './jsonserver-test.component';

describe('JsonserverTestComponent', () => {
  let component: JsonserverTestComponent;
  let fixture: ComponentFixture<JsonserverTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonserverTestComponent]
    });
    fixture = TestBed.createComponent(JsonserverTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
