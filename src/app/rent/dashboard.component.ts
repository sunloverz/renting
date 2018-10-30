import {Component, DoCheck, OnInit} from '@angular/core';
import {EquipmentService, EquipmentStoreService, CartService} from '../core/services';
import {Equipment} from '../core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  equipments: Equipment[];

  constructor(private equipmentService: EquipmentService,
              private equipmentStore: EquipmentStoreService,
              private cartService: CartService) { }

  ngOnInit() {
    if (this.cartService.isEmpty()) {
      this.equipmentService.getItems()
        .subscribe( data => {
          this.equipmentStore.updateThisStore(data);
          this.equipments = this.equipmentStore.all();
        });
    } else {
      this.equipments = this.equipmentStore.all();
    }
  }

  addToCart(equipment: Equipment): void {
    this.equipmentStore.remove(equipment);
    this.cartService.add(equipment);
  }

}
