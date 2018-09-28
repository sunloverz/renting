import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService as AuthGuard} from '../core/services';
import {EquipmentListComponent} from './equipment-list.component';
import {EquipmentEditComponent} from './equipment-edit.component';
import {AddEquipmentComponent} from './add-equipment.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], children: [
      {path: '', component: EquipmentListComponent},
      {path: 'add-equipment', component: AddEquipmentComponent},
      {path: ':id/edit', component: EquipmentEditComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }
