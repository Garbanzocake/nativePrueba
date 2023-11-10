import {
  Component,
  Output,
  computed,
  inject,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { FlightsService } from '../../services/flights.service';
import { Flight } from '../../interfaces/flightsResponse.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-flights-table',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.css'],
})
export class FlightsTableComponent implements OnInit {
  @Output()
  public OnFlightClick: EventEmitter<Flight> = new EventEmitter();

  private flightService = inject(FlightsService);
  private router = inject(Router);

  private authService = inject(AuthService);
  public user = computed(() => this.authService.currentUser());
  public flights: Flight[] = [];

  displayedColumns: string[] = [
    'flight_number',
    'airline',
    'origin',
    'destination',
    'departure_date',
    'arrival_date',
    'available_seats',
    'passenger_seats',
    'actions',
  ];

  constructor() {}
  ngOnInit(): void {
    this.getFlights();
  }

  getFlights() {
    this.flightService
      .getFlights()
      .subscribe((flights) => (this.flights = flights));

    return this.flights;
  }

  emitFlight(flight: Flight) {
    if (this.user() === null) {
      this.router.navigateByUrl('/auth/login');
    }

    this.flightService.addFlightList(flight);
    this.flightService.setCurrentFlight(flight);
    console.log(this.flightService.currentFlights);
    this.OnFlightClick.emit(flight);
  }
  onFlightsFiltered(flightsFiltered: Flight[]) {
    if (flightsFiltered.length === 0) {
      this.flightService
        .getFlights()
        .subscribe((resp) => (this.flights = resp));
    } else {
      this.flights = flightsFiltered;
    }
  }
}
