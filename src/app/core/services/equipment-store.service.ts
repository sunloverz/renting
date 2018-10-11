import { Injectable } from '@angular/core';
import {Equipment} from '../models';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Injectable({
  providedIn: 'root'
})

export class EquipmentStoreService {
  private static STORAGE_KEY = 'current-equipments';
  equipments: Equipment[];

  constructor () {
    this.equipments = JSON.parse(sessionStorage.getItem(EquipmentStoreService.STORAGE_KEY) || '[]');
  }

  updateStore() {
    sessionStorage.setItem(EquipmentStoreService.STORAGE_KEY, JSON.stringify(this.equipments));
  }

  updateThisStore(equipments: Equipment[]) {
    this.equipments = equipments;
    this.updateStore();
  }

  remove(equipment: Equipment) {
    this.equipments.splice(this.equipments.indexOf(equipment), 1);
    // this.equipments = this.equipments.filter((t) => t !== equipment);
    this.updateStore();
    // console.log(this.equipments);
  }

  add(equipment: Equipment) {
    this.equipments.push(Object.assign({}, equipment));
    this.updateStore();
  }

  all() {
    return this.equipments;
  }
}
