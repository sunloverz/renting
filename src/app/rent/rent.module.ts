import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentRoutingModule } from './rent-routing.module';
import { RentComponent } from './rent.component';
import { NewRentComponent } from './new-rent.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Daterangepicker } from 'ng2-daterangepicker';
import { EditRentComponent } from './edit-rent.component';
import { EquipmentsModalComponent } from './equipments-modal.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    RentRoutingModule,
    ReactiveFormsModule,
    Daterangepicker,
    TableModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [RentComponent, NewRentComponent, EditRentComponent, EquipmentsModalComponent],

})
export class RentModule { }
