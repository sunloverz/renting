import { Injectable } from '@angular/core';
import {Equipment} from '../models';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private baseUrl = 'http://localhost:3000/api/v1/customers';

  equipments: Array<Equipment>;

  constructor () {
    this.equipments = JSON.parse(sessionStorage.getItem('current-cart') || '[]');
  }

  private updateStore() {
    sessionStorage.setItem('current-cart', JSON.stringify(this.equipments));
  }

  add(equipment: Equipment) {
    this.equipments.push(Object.assign({}, equipment));
    this.updateStore();
  }

  remove(equipment: Equipment) {
    this.equipments.splice(this.equipments.indexOf(equipment), 1);
    this.updateStore();
  }

  isEmpty(): boolean {
    return this.equipments.length < 1 ;
  }

  count(): number {
    return this.equipments.length;
  }

  all() {
    return this.equipments;
  }
}
