import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReportComponent} from '../report/report.component'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {APP_CONFIG, AppConfig} from '../app.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthenticationService, AuthenticationMockService } from '../services/authentication.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AlertService} from '../services/alert.service'
import {AppRoutingModule} from '../app-routing.module'
import {AuthGuard} from '../guards/auth.guard'
import { ErrorInterceptor } from '../Interceptors/error.interceptor';
import {JwtInterceptor} from '../Interceptors/jwt.interceptor';
import {AlertComponent} from '../directives/alert.component'
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,ReportComponent,AlertComponent ],
      imports:[ BrowserModule,
        AppRoutingModule, HttpClientModule, BrowserAnimationsModule,
        MatCardModule, MatButtonModule, FormsModule, ReactiveFormsModule,
        MatFormFieldModule, MatInputModule, MatToolbarModule, MatSelectModule],
      providers:[AuthGuard,AlertService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide:AuthenticationService, useClass: AuthenticationMockService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate user ', ()=>{
    component.profileForm.controls.username.setValue('test');
    component.profileForm.controls.password.setValue('test');
    component.profileForm.updateValueAndValidity();
    let result = component.onSubmit();
    expect(component.invalidcred).toBeFalsy();
  })
  it('should validate user ', ()=>{
    component.profileForm.controls.username.setValue('Vishnu');
    component.profileForm.controls.password.setValue('test');
    component.profileForm.updateValueAndValidity();
    let result = component.onSubmit();
    expect(component.invalidcred).toBeTruthy();
  })
  it('invalid form ', ()=>{
    let result = component.onSubmit();
  })
});
