import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list.component';
import {AddCustomerComponent} from './add-customer.component';

const routes: Routes = [
  {
    path: '', component: CustomerListComponent,
    children: [
      { path: 'add-customer', component: AddCustomerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

