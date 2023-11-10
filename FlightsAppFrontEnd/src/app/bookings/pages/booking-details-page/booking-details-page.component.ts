import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { BookingsService } from '../../services/bookings.service';

import { Booking, BookingByID } from '../../interface/booking.interface';
import {
  Flight,
  FlightShort,
} from 'src/app/flights/interfaces/flightsResponse.interface';
import { FlightsService } from 'src/app/flights/services/flights.service';

@Component({
  templateUrl: './booking-details-page.component.html',
  styleUrls: ['./booking-details-page.component.css'],
})
export class BookingDetailsPageComponent implements OnInit {
  public booking!: BookingByID;
  public flights:Flight[]=[];

  constructor(
    private bookingsService: BookingsService,
    private flightsService:FlightsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.bookingsService.getBookingById(id)))
      .subscribe((booking:any) => {
        if (!booking) return this.router.navigate(['/bookings/list']);

        this.booking = booking[0];

        console.log('vuelos',this.booking);



        this.booking.flights.forEach((e:FlightShort)=>{
          this.flightsService.getFlight(e.flightId).subscribe((resp)=>{
            this.flights.push(resp);
          });
        })



        return booking.flights;
      });
  }

  getFlights(booking: BookingByID) {
    // console.log(booking);
    // booking.flights.forEach((element:any) => {
    //   console.log(element)
    //   // this.flights.push(element.flightId);
    // });
  }
}
