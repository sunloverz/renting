import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../models/equipment';

@Injectable({
  providedIn: 'root'
})

export class EquipmentService {
  private baseUrl = 'http://localhost:3000/api/v1/equipments';

  constructor(public http: HttpClient) { }

  getItems() {
    return this.http.get<Equipment[]>(this.baseUrl);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  getItemById(id: number) {
    return this.http.get<Equipment>(this.baseUrl + '/' + id);
  }

  create(equipment: Equipment) {
    return this.http.post(this.baseUrl, {equipment: equipment});
  }

  update(equipment: Equipment) {
    return this.http.put(this.baseUrl + '/' + equipment.id, {equipment: equipment});
  }
}
