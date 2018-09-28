import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  { path: 'customers/:id', loadChildren: './customer/customer.module#CustomerModule' },
  { path: 'account', loadChildren: './account/account.module#AccountModule'},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: false}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



