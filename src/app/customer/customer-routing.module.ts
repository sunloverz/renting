import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { EditCustomerComponent } from './edit-customer.component';
import { AuthGuardService as AuthGuard } from '../core';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], children: [
      { path: '', component: CustomerComponent },
      { path: 'edit', component: EditCustomerComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
  static components = [CustomerComponent, EditCustomerComponent];
}
