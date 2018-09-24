import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services';
import { CustomerService } from './services';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthenticationService, CustomerService]
})
export class CoreModule { }
