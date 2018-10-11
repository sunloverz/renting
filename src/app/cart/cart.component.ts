import { Component, OnInit } from '@angular/core';
import {CartService} from '../core/services/cart.service';
import {Customer, Equipment} from '../core/models';
import {EquipmentStoreService} from '../core/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  equipments: Equipment[];


  constructor(private cartService: CartService,
              private equipmentStore: EquipmentStoreService) { }

  ngOnInit() {
    this.equipments = this.cartService.equipments;
  }

  deleteEquipment(equipment: Equipment) {
    this.cartService.remove(equipment);
    this.equipmentStore.add(equipment);
  }
}
