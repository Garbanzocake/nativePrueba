import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Flight } from '../../interfaces/flightsResponse.interface';
import { FlightsService } from '../../services/flights.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public flights: Flight[] = [];

  @Output()
  public onFlightsFiltered: EventEmitter<Flight[]> = new EventEmitter();

  public searchInput = new FormControl('');

  private flightsService = inject(FlightsService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.flightsService.getFlights().subscribe((resp) => {
      this.flights = resp;
    });
  }

  searchFlight() {
    const value: string = this.searchInput.value || '';

    let word = value.trim().toLowerCase();

    let flightsFiltered: any = [];

    flightsFiltered = this.flights.filter((flight) =>
      flight.destination.toLowerCase().includes(word)
    );
    this.onFlightsFiltered.emit(flightsFiltered);
  }
}
