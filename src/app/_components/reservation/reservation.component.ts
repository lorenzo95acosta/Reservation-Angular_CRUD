import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  bookings: any[] = [
  ];

  form: FormGroup;

  constructor(private formB: FormBuilder) {
    this.form = this.formB.group({
      name: [""],
      cabin: [],
      active: [true],
      restaurant: [""],
      date: [""],
      hour: [""],
      attendees: []
    })
  }

  ngOnInit(): void {
  }

  bookTable(){
    const bookedTable: any = {
      name: this.form.get("name")?.value,
      cabin: this.form.get("cabin")?.value,
      active: this.form.get("active")?.value,
      restaurant: this.form.get("restaurant")?.value,
      date: this.form.get("date")?.value,
      hour: this.form.get("hour")?.value,
      attendees: this.form.get("attendees")?.value
    }
    this.bookings.push(bookedTable);
    this.form.reset();
  }

}
