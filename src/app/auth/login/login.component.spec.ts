import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './../../store/app.state';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule,
        StoreModule.forRoot(appReducer), ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Email-Check] - should check users email address is invalid', ()=>{
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('abc');

    expect(email.errors['email']).toBeTruthy();
  });

  it('[Email-Check] - should check users correct email address is entered', ()=>{
    let email = component.loginForm.controls['email'];
    email.setValue('test@test.com');
    expect(email.errors).toBeNull();
  });

  it('[Password-Check] - should check password errors', ()=>{
    let password = component.loginForm.controls['password'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('1234');
    expect(password.errors['minlength']).toBeTruthy();
  });

  it('[Password-Check] - should check password validity', ()=>{
    let password = component.loginForm.controls['password'];
    password.setValue('123456');
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  });

  it('[Form-Check] - should check form is valid or not if no values entered', ()=>{
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('[Form-Check] - should check form is valid or not if no values entered', ()=>{
    component.loginForm.controls['email'].setValue('test@test.com');
    component.loginForm.controls['password'].setValue('123456');

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('[Formm-Submit] - should check form is submited', ()=>{
    expect(component.loginForm.invalid).toBeTruthy;
    let btn = fixture.debugElement.query(By.css('input[type=submit]'));

    component.loginForm.controls['email'].setValue('test@test.com');
    component.loginForm.controls['password'].setValue('123456');
    fixture.detectChanges();

    component.onLoginSubmit();
    fixture.detectChanges();
    
  } )

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
