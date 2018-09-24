import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import {ReactiveFormsModule} from '@angular/forms';
import {CustomerComponent} from './customer.component';
import {EditCustomerComponent} from './edit-customer.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerComponent, EditCustomerComponent]
})
export class CustomerModule { }
