import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService as AuthGuard} from '../core/services';
import {RentComponent} from './rent.component';
import {NewRentComponent} from './new-rent.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], children: [
      { path: '', component: RentComponent},
      { path: 'new', component: NewRentComponent},
      { path: 'dashboard', component: DashboardComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRoutingModule { }
