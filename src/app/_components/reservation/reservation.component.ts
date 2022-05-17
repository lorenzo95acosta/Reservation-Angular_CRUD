import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  bookings: any[] = [
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2},
    {name:"Lorenzo", cabin:"333", active: true, restaurant:"Equis", date:"17/05/2022 20:00", attendees: 5},
    {name:"Jose", cabin:"795", active: true, restaurant:"Zeta", date:"17/05/2022 21:30", attendees: 2}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
