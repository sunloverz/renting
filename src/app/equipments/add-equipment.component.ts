import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EquipmentService} from '../core';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      state: ['', Validators.required],
      serial_number: ['', Validators.required],
      vendor_code: ['', Validators.required],
      price_per_hour: ['', Validators.required],
      price_per_day: ['', Validators.required],
      price_per_month: ['', Validators.required],
    });
  }

  onSubmit() {
    this.equipmentService.create(this.addForm.value)
      .subscribe( data => {
          this.router.navigate(['equipments']);
        },
        error => {
          alert(error);
        });
  }
}
