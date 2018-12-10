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
  cols: any[];

  constructor(private equipmentService: EquipmentService,
              private router: Router) { }

  ngOnInit() {
    this.getEquipments();
    this.cols = [
          { field: 'id', header: 'id' },
          { field: 'name', header: 'name' },
          { field: 'vendor_code', header: 'Vendor Code' },
          { field: 'serial_number', header: 'Serial Number' },
          { field: 'size', header: 'Size'},
          { filed: 'price_per_day', header: 'Price' }
        ];

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
