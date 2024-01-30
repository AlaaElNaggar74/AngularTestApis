import { LoginGaurdComponent } from './login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('LoginGaurdComponent', () => {
  let component: LoginGaurdComponent;
  let fixture: ComponentFixture<LoginGaurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginGaurdComponent]
    });
    fixture = TestBed.createComponent(LoginGaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
