import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import { Customer, Equipment, RentService, CustomerService, EquipmentService } from '../core';
import { Router, ActivatedRoute } from '@angular/router';
import { Rent } from '../core/models/rent';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-rent',
  templateUrl: './edit-rent.component.html'
  })
export class EditRentComponent implements OnInit {

  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;
  rent: Rent;

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
              private route: ActivatedRoute,
              private rentService: RentService,
              private customerService: CustomerService,
              private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      price: ['', Validators.required],
      discount: ['', Validators.required],
      customer_id: ['', Validators.required],
      date_range: ['', Validators.required]
      });
    this.getCustomers();
    this.route.params.subscribe(params => {
      const rentId = +params['id'];
      if (rentId) {
        this.getRent(rentId);
      }
    });
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe( data => {
        this.customers = data;
      });
  }

  getRent(rentId: number): void {
    this.rentService.getItemById(rentId)
      .subscribe( data => {
        this.rent = data;
        this.addForm.patchValue({
          price: data.price,
          discount: data.discount,
          customer_id: data.customer_id
        });
        this.picker.datePicker.setStartDate(moment(data.start_date));
        this.picker.datePicker.setEndDate(moment(data.end_date));
        this.rentedEqiupments = this.rent.equipments;
      });
  }
}
