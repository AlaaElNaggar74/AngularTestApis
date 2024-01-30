import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputapistestComponent } from './outputapistest.component';

describe('OutputapistestComponent', () => {
  let component: OutputapistestComponent;
  let fixture: ComponentFixture<OutputapistestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputapistestComponent]
    });
    fixture = TestBed.createComponent(OutputapistestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
