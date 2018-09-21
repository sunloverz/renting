import { NgModule } from '@angular/core';
import {CustomersComponent} from './customers/customers.component';
import {RouterModule, Routes} from '@angular/router';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'edit-customer', component: EditCustomerComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

