import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { CustomerService } from '../core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: CustomerService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      discount: ['', Validators.required],
      birthdate: ['', Validators.required],
      address: ['', Validators.required],
      passport_id: ['', Validators.required],
      issued_by: ['', Validators.required],
      issue_date: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.createCustomer(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['customers']);
        },
        error => {
          alert(error);
      });
  }

}

