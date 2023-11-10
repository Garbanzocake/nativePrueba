import { Component, OnInit, inject } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';

import { BookingByUser } from '../../interface/booking.interface';

@Component({
  templateUrl: './list-bookings-page.component.html',
  styleUrls: ['./list-bookings-page.component.css'],
})
export class ListBookingsPageComponent implements OnInit {
  private bookingService = inject(BookingsService);
  public userBookings: BookingByUser[] = [];

  displayedColumns: string[] = [
    'booking_date',
    'passengers_number',
    'flights',
    'actions',
  ];

  constructor() {}

  ngOnInit(): void {
    this.bookingService.getBookingsByUser().subscribe((resp) => {
      this.userBookings = resp;
    });
  }
}
