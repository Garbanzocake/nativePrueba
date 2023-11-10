import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';

import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { ListBookingsPageComponent } from './pages/list-bookings-page/list-bookings-page.component';

import { BookingDetailsPageComponent } from './pages/booking-details-page/booking-details-page.component';
import { SearchBookingPageComponent } from './pages/search-booking-page/search-booking-page.component';
import { LayoutBookingPageComponent } from './layouts/layout-booking-page/layout-booking-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightsModule } from '../flights/flights.module';

@NgModule({
  declarations: [
    NewBookingComponent,
    ListBookingsPageComponent,
    BookingDetailsPageComponent,
    SearchBookingPageComponent,
    LayoutBookingPageComponent,
  ],
  imports: [CommonModule,ReactiveFormsModule, BookingsRoutingModule,MaterialModule,FlightsModule],
})
export class BookingsModule {}
