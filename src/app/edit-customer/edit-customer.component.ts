import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import { Router } from '@angular/router';
import {Customer} from '../customer';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    const customerId = localStorage.getItem("editCustomerId");
    if (!customerId) {
      alert("Invalid action.");
      this.router.navigate(['customers']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.customerService.getCustomerById(+customerId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.customerService.updateCustomer(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['customers']);
        },
        error => {
          alert(error);
        });
  }


}
