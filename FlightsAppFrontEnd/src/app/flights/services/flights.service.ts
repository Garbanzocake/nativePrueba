import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable, of, throwError, catchError } from 'rxjs';
import { Flight } from '../interfaces/flightsResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private ApiUrl: string;

  public currentFlights:Flight[]=[];

  private _selectedFlight = signal<Flight | null>(null);

  //! Al mundo Exterior
  public selectedFlight = computed(() => this._selectedFlight());



  constructor() {
    this.ApiUrl = 'flights';
  }

  getFlights(): Observable<Flight[]> {
    const url = `${this.baseUrl}/${this.ApiUrl}`;
    return this.http.get<Flight[]>(url);
  }

  getFlight(idFlight:number):Observable<Flight>{
    const url = `${this.baseUrl}/${this.ApiUrl}/${idFlight}`;

    return this.http.get<Flight>(url);
  }

  addFlightList(flight:Flight){
    this.currentFlights.push(flight);
  }

  setCurrentFlight(flight:Flight){
    this._selectedFlight.set(flight);
  }
}
