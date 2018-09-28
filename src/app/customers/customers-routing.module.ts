import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list.component';
import {AddCustomerComponent} from './add-customer.component';
import {AuthGuardService as AuthGuard} from '../core';
import {CustomerComponent} from './customer.component';
import {EditCustomerComponent} from './edit-customer.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: ':id', component: CustomerComponent },
  { path: ':id/edit', component: EditCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

