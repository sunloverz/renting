import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { EditCustomerComponent } from './edit-customer.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'edit', component: EditCustomerComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
  static components = [CustomerComponent, EditCustomerComponent];
}
