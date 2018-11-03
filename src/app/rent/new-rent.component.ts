import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CartService, Customer, CustomerService, RentService} from '../core';

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.css']
})
export class NewRentComponent implements OnInit {
  addForm: FormGroup;
  statuses = ['rented', 'reserved', 'expired'];
  rent_types = ['hour', 'day', 'month'];
  customers: Customer[];
  cartEquipmentIds: number[];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private rentService: RentService,
              private customerService: CustomerService,
              private cartService: CartService) { }

  ngOnInit() {
    this.getCustomers();
    this.getCartEquipmentIds();
    this.addForm = this.formBuilder.group({
      status: [this.statuses[0], Validators.required],
      rent_type: [this.rent_types[0], Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      price: ['', Validators.required],
      paid: ['', Validators.required],
      discount: ['', Validators.required],
      customer_id: ['', Validators.required],
      duration: ['', Validators.required],
      date_range: ['', Validators.required]
    });
  }

  getCartEquipmentIds(): void {
    const equipments = this.cartService.all();
    this.cartEquipmentIds = equipments.map((equipment) => equipment.id);
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe( data => {
        this.customers = data;
      });
  }


  onSubmit() {
    this.rentService.create({equipment_ids: this.cartEquipmentIds, ...this.addForm.value})
      .subscribe( data => {
          this.router.navigate(['rents']);
          console.log(data);
        },
        error => {
          alert(error);
        });
  }
}
