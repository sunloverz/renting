import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService as AuthGuard} from '../core/services';
import {RentComponent} from './rent.component';
import {NewRentComponent} from './new-rent.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], children: [
      { path: '', component: RentComponent},
      { path: 'new', component: NewRentComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRoutingModule { }
