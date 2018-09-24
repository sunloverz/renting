import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularTokenModule} from 'angular-token';
import { LoginComponent } from './login/login.component';
import {CoreModule} from './core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularTokenModule.forRoot({
      apiBase:                 'http://localhost:3000/api/v1',
      signInPath:              'auth/sign_in',
      signOutPath:             'auth/sign_out',
      validateTokenPath:       'auth/validate_token',
      signOutFailedValidate:   false,
      registerAccountPath:     'auth',
      deleteAccountPath:       'auth',
      updatePasswordPath:      'auth',
      resetPasswordPath:       'auth/password'
    })
  ],
  providers: [AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
