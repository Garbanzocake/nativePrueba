import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBookingPageComponent } from './layouts/layout-booking-page/layout-booking-page.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { SearchBookingPageComponent } from './pages/search-booking-page/search-booking-page.component';
import { ListBookingsPageComponent } from './pages/list-bookings-page/list-bookings-page.component';
import { BookingDetailsPageComponent } from './pages/booking-details-page/booking-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBookingPageComponent,
    children: [
      { path: 'new-booking', component: NewBookingComponent },
      { path: 'search', component: SearchBookingPageComponent },
      { path: 'edit/:id', component: NewBookingComponent },
      { path: 'list', component: ListBookingsPageComponent },
      { path: ':id', component: BookingDetailsPageComponent },
      { path: '**', redirectTo: 'new-booking' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsRoutingModule {}
