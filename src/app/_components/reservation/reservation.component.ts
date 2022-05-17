import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      name: ["", Validators.required],
      cabin: [,[Validators.required, Validators.maxLength(4)]],
      active: [true],
      restaurant: ["",Validators.required],
      date: ["",[Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      hour: ["",[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      attendees: [,Validators.required]
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

  deleteReservation(index: number){
    this.bookings.splice(index, 1)
  }

}
