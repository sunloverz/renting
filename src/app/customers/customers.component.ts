import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe( data => {
        this.customers = data;
        console.log(this.customers);
      });
  }

  deleteCustomer(customer: Customer): void {
    this.customerService.deleteCustomer(customer.id)
      .subscribe( data => {
        this.customers = this.customers.filter(c => c !== customer);
      });
  }

  editCustomer(customer: Customer): void {
    localStorage.removeItem("editCustomerId");
    localStorage.setItem("editCustomerId", customer.id.toString());
    this.router.navigate(['edit-customer']);
  }

  addCustomer(): void {
    this.router.navigate(['add-customer']);
  }
}
