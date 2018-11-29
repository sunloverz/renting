import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/rents', pathMatch: 'full' },
  { path: 'rents', loadChildren: './rent/rent.module#RentModule'},
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  { path: 'account', loadChildren: './account/account.module#AccountModule'},
  { path: 'equipments', loadChildren: './equipments/equipments.module#EquipmentsModule'},
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: 'reservations', loadChildren: './reservations/reservations.module#ReservationsModule'},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: false}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



