import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthGuard} from './guards/auth.guard'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertComponent} from './directives/alert.component'
import { LoginComponent } from './login/login.component';
import {AlertService} from './services/alert.service'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {APP_CONFIG, AppConfig} from './app.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component';
import { ErrorInterceptor } from './Interceptors/error.interceptor';
import {JwtInterceptor} from './Interceptors/jwt.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReportComponent,AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule,
    MatCardModule, MatButtonModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatToolbarModule, MatSelectModule
  ],
  providers: [AuthGuard,AlertService,
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
