import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmProdListComponent } from './sm-prod-list.component';

describe('SmProdListComponent', () => {
  let component: SmProdListComponent;
  let fixture: ComponentFixture<SmProdListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmProdListComponent]
    });
    fixture = TestBed.createComponent(SmProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
