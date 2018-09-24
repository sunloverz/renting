import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private baseUrl = 'http://localhost:3000/api/v1/customers';

  constructor(public http: HttpClient) { }

  getCustomers() {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  deleteCustomer(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  getCustomerById(id: number) {
    return this.http.get<Customer>(this.baseUrl + '/' + id);
  }

  createCustomer(customer: Customer) {
    return this.http.post(this.baseUrl, customer);
  }

  updateCustomer(customer: Customer) {
    return this.http.put(this.baseUrl + '/' + customer.id, customer);
  }
}
