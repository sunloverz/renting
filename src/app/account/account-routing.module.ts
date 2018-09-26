import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService as AuthGuard} from '../core/services';
import {CustomerComponent} from '../customer/customer.component';
import {EditCustomerComponent} from '../customer/edit-customer.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
