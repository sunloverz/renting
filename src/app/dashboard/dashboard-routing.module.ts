import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService as AuthGuard} from '../core/services';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      {path: '', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
