import { Component, OnInit } from '@angular/core';
import {Customer} from '../core/models';
import {CustomerService} from '../core/services';
import {Router} from '@angular/router';
import {Equipment} from '../core';
import {EquipmentService} from '../core';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
  equipments: Equipment[];

  constructor(private equipmentService: EquipmentService,
              private router: Router) { }

  ngOnInit() {
    this.getEquipments();
  }

  getEquipments(): void {
    this.equipmentService.getItems()
      .subscribe( data => {
        this.equipments = data;
      });
  }

  deleteEquipment(equipment: Equipment): void {
    this.equipmentService.delete(equipment.id)
      .subscribe( data => {
        this.equipments = this.equipments.filter(c => c !== equipment);
      });
  }

  editEquipment(equipment: Equipment): void {
    this.router.navigate(['edit-customer']);
  }

  addEquipment(): void {
    this.router.navigate(['add-customer']);
  }
}
