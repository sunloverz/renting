import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rent } from '../models/rent';

@Injectable({
  providedIn: 'root'
})

export class RentService {
  private baseUrl = 'http://localhost:3000/api/v1/rents';

  constructor(public http: HttpClient) { }

  getItems() {
    return this.http.get<Rent[]>(this.baseUrl);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  getItemById(id: number) {
    return this.http.get<Rent>(this.baseUrl + '/' + id);
  }

  create(rent: Rent) {
    return this.http.post(this.baseUrl, {rent: rent});
  }

  update(rent: Rent) {
    return this.http.put(this.baseUrl + '/' + rent.id, {rent: rent});
  }
}
