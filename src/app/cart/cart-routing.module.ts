import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService as AuthGuard} from '../core/services';
import {EditCustomerComponent} from '../customers/edit-customer.component';
import {CartComponent} from './cart.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], children: [
      { path: '', component: CartComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
