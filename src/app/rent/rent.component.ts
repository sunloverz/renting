import { Component, OnInit } from '@angular/core';
import {Rent} from '../core/models/rent';
import {RentService} from '../core/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  rents: Rent[];

  constructor(private rentService: RentService,
              private router: Router) { }

  ngOnInit() {
    this.fetchRents();
  }

  fetchRents(): void {
    this.rentService.getItems()
      .subscribe( data => {
        this.rents = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteRent(rent: Rent): void {
    this.rentService.delete(rent.id)
      .subscribe( data => {
        this.rents = this.rents.filter(c => c !== rent);
      });
  }

  editRent(rent: Rent): void {
    this.router.navigate(['edit-rent']);
  }
}


