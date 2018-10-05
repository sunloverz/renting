import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService, EquipmentService} from '../core';
import {Equipment} from '../core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit {
  equipment: Equipment;
  editForm: FormGroup;
  equipmentId: String;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private equipmentService: EquipmentService,
    private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.equipmentId = params['id']; // --> Name must match wanted parameter
    });
    console.log(this.equipmentId);

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      state: ['', Validators.required],
      serial_number: ['', Validators.required],
      vendor_code: ['', Validators.required],
      price_per_hour: ['', Validators.required],
      price_per_day: ['', Validators.required],
      price_per_month: ['', Validators.required]
    });
    this.equipmentService.getEquipmentById(+this.equipmentId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.equipmentService.updateEquipment(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['equipments']);
        },
        error => {
          alert(error);
        });
  }
}
