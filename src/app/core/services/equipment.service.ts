import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../models/equipment';

@Injectable({
  providedIn: 'root'
})

export class EquipmentService {
  private baseUrl = 'http://localhost:3000/api/v1/equipments';

  constructor(public http: HttpClient) { }

  getEquipment() {
    return this.http.get<Equipment[]>(this.baseUrl);
  }

  deleteEquipment(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  getEquipmentById(id: number) {
    return this.http.get<Equipment>(this.baseUrl + '/' + id);
  }

  createEquipment(equipment: Equipment) {
    return this.http.post(this.baseUrl, {equipment: equipment});
  }

  updateEquipment(equipment: Equipment) {
    return this.http.put(this.baseUrl + '/' + equipment.id, {equipment: equipment});
  }
}
