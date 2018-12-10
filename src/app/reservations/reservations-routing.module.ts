import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsComponent } from './reservations.component';
import {AuthGuardService as AuthGuard} from '../core';

const routes: Routes = [
    { path: '', canActivate: [AuthGuard], children: [
      { path: '', component: ReservationsComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
