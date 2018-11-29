import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CartService, Customer, CustomerService, RentService, Equipment, EquipmentStoreService, EquipmentService} from '../core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { DaterangePickerComponent } from 'ng2-daterangepicker';

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.css']
})
export class NewRentComponent implements OnInit {

  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;

  addForm: FormGroup;
  customers: Customer[];
  equipments: Equipment[];
  rentedEqiupments: Equipment[] = [];

  rentedDays = 1;
  subtotal: number;
  discount: number;
  total: number;

  public daterange: any = {};

  public options: any = {
    locale: { format: 'YYYY-MM-DD hh:mm A' },
    timePicker: true,
    alwaysShowCalendars: false
  };

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private rentService: RentService,
              private customerService: CustomerService,
              private equipmentService: EquipmentService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getCustomers();
    this.addForm = this.formBuilder.group({
      price: ['', Validators.required],
      paid: ['', Validators.required],
      discount: ['', Validators.required],
      customer_id: ['', Validators.required]
    });
    this.getEquipments();
  }

  rentEquipment(equipment: Equipment): void {
    this.rentedEqiupments.push(equipment);
    equipment.status = 'rented';
    this.calculatePrice();
  }

  deleteEquipment(equipment: Equipment): void {
    this.rentedEqiupments.splice(this.rentedEqiupments.indexOf(equipment), 1);
    equipment.status = 'available';
    this.calculatePrice();
  }

  getEquipments(): void {
    this.equipmentService.getItems()
      .subscribe( data => {
        this.equipments = data;
      });
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe( data => {
        this.customers = data;
      });
  }

  onChange(customer_id): void {
    const customer = this.customers.find(c => c.id === Number(customer_id));
    this.addForm.patchValue({
      discount: customer.discount,
    });
  }

  public selectedDate(value: any) {
    this.rentedDays = value.end.diff(value.start, 'days');
    this.calculatePrice();
  }

  calculatePrice(): void {
    const sum = this.rentedEqiupments.map(v => v.price_per_day).reduce(( a, b) => a + b);
    this.subtotal = this.rentedDays * sum;
    this.discount = (this.subtotal * Number(this.addForm.value.discount)) / 100;
    this.total = this.subtotal - this.discount;
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onSubmit() {
    const equipmentIds = this.rentedEqiupments.map((equipment) => equipment.id);
    const params = { start_date: this.picker.datePicker.startDate.toISOString(),
                     end_date: this.picker.datePicker.endDate.toISOString(),
                     equipment_ids: equipmentIds,
                     status: 'rented',
                     subtotal_price: this.subtotal,
                     total_price: this.total,
                     ...this.addForm.value };

    this.rentService.create(params)
      .subscribe( data => {
          this.router.navigate(['rents']);
          console.log(data);
        },
        error => {
          alert(error);
        });
  }

  onReserve() {
    const equipmentIds = this.rentedEqiupments.map((equipment) => equipment.id);
    const params = { start_date: this.picker.datePicker.startDate.toISOString(),
                     end_date: this.picker.datePicker.endDate.toISOString(),
                     equipment_ids: equipmentIds,
                     status: 'reserved',
                     subtotal_price: this.subtotal,
                     total_price: this.total,
                     ...this.addForm.value };

    this.rentService.create(params)
      .subscribe( data => {
          this.router.navigate(['rents']);
          console.log(data);
        },
        error => {
          alert(error);
        });
  }
}
