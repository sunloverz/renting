import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { EquipmentListComponent } from './equipment-list.component';
import { EquipmentEditComponent } from './equipment-edit.component';
import { AddEquipmentComponent } from './add-equipment.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {TableModule} from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule
  ],
  declarations: [EquipmentListComponent, EquipmentEditComponent, AddEquipmentComponent]
})
export class EquipmentsModule { }
