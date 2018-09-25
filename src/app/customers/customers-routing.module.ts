import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list.component';
import {AddCustomerComponent} from './add-customer.component';
import {AuthGuardService as AuthGuard} from '../core';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], children: [
      { path: '', component: CustomerListComponent },
      { path: 'add-customer', component: AddCustomerComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

