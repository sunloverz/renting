import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService, CustomerService} from '../core';
import {Customer} from '../core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer;
  editForm: FormGroup;
  customerId: String;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private authService: AuthenticationService) {}

  ngOnInit() {
    // const customerId = localStorage.getItem('editCustomerId');
    // if (!customerId) {
    //   alert('Invalid action.');
    //   this.router.navigate(['customers']);
    //   return;
    // }
    this.route.params.subscribe(params => {
      this.customerId = params['id']; // --> Name must match wanted parameter
    });
    console.log(this.customerId);

    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.customerService.getCustomerById(+this.customerId)
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
