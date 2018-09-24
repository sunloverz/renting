import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list.component';
import {AddCustomerComponent} from './add-customer.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerListComponent, AddCustomerComponent]
})
export class CustomersModule { }



