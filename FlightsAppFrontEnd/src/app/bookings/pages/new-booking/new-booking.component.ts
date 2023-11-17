import { Component, OnInit, computed, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Flight } from 'src/app/flights/interfaces/flightsResponse.interface';
import { FlightsService } from 'src/app/flights/services/flights.service';
import { Booking } from '../../interface/booking.interface';
import { BookingsService } from '../../services/bookings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css'],
})
export class NewBookingComponent implements OnInit {
  private flightService = inject(FlightsService);
  private bookingsService = inject(BookingsService);
  private authService = inject(AuthService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private snackbar = inject(MatSnackBar);
  public user = computed(() => this.authService.currentUser());
  public selectedPreviousFlight = computed(() =>
    this.flightService.selectedFlight()
  );

  //to get all flights
  public flightsInfo: Flight[] = [];

  //to show on screen
  public tempFlights: Flight[] = [];

  //To send to db
  public flightsNumber: number[] = [];

  selectedFlight: number | undefined;

  constructor() {

  }

  get currentBooking(): Booking {
    const booking = this.bookingForm.value as Booking;
    return booking;
  }

  //Formulario reactivo
  public bookingForm = new FormGroup({
    id: new FormControl<number>(0),
    booking_date: new FormControl<Date>(new Date()),
    passengers_number: new FormControl<number>(0, [
      Validators.required,
      Validators.min(1),
    ]),
    flights: new FormControl<number[]>([] ),
    user: new FormControl<number>(this.user()!.id),
  });

  ngOnInit(): void {
    this.flightService.getFlights().subscribe((resp) => {
      this.flightsInfo = resp;

      console.log(this.flightsInfo);
    });

    if (this.selectedPreviousFlight !== null) {
      this.selectedFlight = this.selectedPreviousFlight()?.id;
    } else {
      this.selectedFlight = undefined;
    }

    if (!this.router.url.includes('edit')) {
      return;
    }

    //Traer la data para cuando se vaya a editar
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.bookingsService.getBookingById(id)))
      .subscribe((booking) => {
        if (!booking) return this.router.navigateByUrl('/');

        this.bookingForm.reset({
          id: 0,
          flights: [],
          user: 0,
          booking_date: new Date(),
          passengers_number: 0,
        });
        return;
      });
  }



  onSubmit(): void {
    if (this.bookingForm.invalid) return;

    //Actualizar booking si hay
    if (this.currentBooking.id) {
      this.bookingsService
        .updateBooking(this.currentBooking)
        .subscribe((booking) => {
          this.showSnackbar(`${booking.id} updated!`);
        });
      return;
    }

    console.log('currentBooking', this.currentBooking);

    const { id, ...createBookingPayload } = this.currentBooking;

    if(createBookingPayload.flights.length<0) {

      Swal.fire('Error','No hay vuelos en la reserva','error');
      return;
    };



    //crear
    this.bookingsService
      .createBooking(createBookingPayload)
      .subscribe((booking) => {
        Swal.fire('Success', `Booking created`, 'success');
        this.router.navigate([`/bookings/${id}`]);
        // this.showSnackbar(`${booking.id} created!`);
      });

    // this.addFlight();
  }

  addFlight() {
    //adding to tempflights to display

    if (this.selectedFlight !== undefined) {
      console.log(this.selectedFlight);
      this.tempFlights.push(this.flightsInfo[this.selectedFlight - 1]);

      this.currentBooking.flights.push(this.selectedFlight);
    }
  }
  resetFlightList() {
    this.tempFlights = [];
    this.selectedFlight=undefined;
  }
  deleteFlight(flight: Flight) {
    this.tempFlights = this.tempFlights.filter((flit) => flit.id != flight.id);
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    });
  }
}
