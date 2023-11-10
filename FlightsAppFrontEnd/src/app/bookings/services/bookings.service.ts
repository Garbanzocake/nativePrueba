import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable, catchError, of } from 'rxjs';
import { Booking, BookingByID } from '../interface/booking.interface';
import { BookingByUser } from '../interface/booking.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private ApiUrl: string;

  constructor() {
    this.ApiUrl = 'bookings';
  }

  getBookingById(id: string): Observable<BookingByID | undefined> {
    const url = `${this.baseUrl}/${this.ApiUrl}/${id}`;
    const token = localStorage.getItem('token');

    if (!token) throw Error('Token is Required');

    const headers= new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http
      .get<BookingByID>(url,{headers})
      .pipe(catchError((error) => of(undefined)));
  }

  getBookingsByUser():Observable<BookingByUser[]>{
    const url = `${this.baseUrl}/${this.ApiUrl}/user`;
    const token = localStorage.getItem('token');

    if (!token) throw Error('Token is Required');

    const headers= new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<BookingByUser[]>(url,{headers});
  }

  createBooking(booking: Booking): Observable<Booking> {
    const url = `${this.baseUrl}/${this.ApiUrl}`;
    const token = localStorage.getItem('token');

    if (!token) throw Error('Token is Required');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<Booking>(`${url}`, booking, { headers });
  }
  updateBooking(booking: Booking) {
    if (!booking.id) throw Error('Booking id is Required');

    const url = `${this.baseUrl}/${this.ApiUrl}/${booking.id}`;
    return this.http.patch<Booking>(`${url}/${booking.id}`, booking);
  }
}
