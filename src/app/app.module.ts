import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import {CustomerService} from './customer.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularTokenModule} from 'angular-token';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    DashboardComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [CustomerService, AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
