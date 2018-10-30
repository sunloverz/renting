import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentRoutingModule } from './rent-routing.module';
import { RentComponent } from './rent.component';
import { NewRentComponent } from './new-rent.component';
import { DashboardComponent } from './dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RentComponent, NewRentComponent, DashboardComponent]
})
export class RentModule { }
