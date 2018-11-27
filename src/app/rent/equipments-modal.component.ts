import { Component, OnInit } from '@angular/core';
import { Equipment, EquipmentService } from '../core';

@Component({
  selector: 'app-equipments-modal',
  templateUrl: './equipments-modal.component.html'
  })
export class EquipmentsModalComponent implements OnInit {

  equipments: Equipment[];
  constructor( private equipmentService: EquipmentService ) { }

  ngOnInit() {
    this.getEquipments();
  }

  getEquipments(): void {
    this.equipmentService.getItems()
      .subscribe( data => {
        this.equipments = data;
      });
  }


}
