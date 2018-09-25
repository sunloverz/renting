import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService, AuthGuardService} from './services';
import { CustomerService } from './services';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthenticationService, CustomerService, AuthGuardService]
})
export class CoreModule { }
