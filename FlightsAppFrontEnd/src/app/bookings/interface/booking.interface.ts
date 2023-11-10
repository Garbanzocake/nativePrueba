import { User } from "src/app/auth/interfaces";
import { Flight, FlightShort } from "src/app/flights/interfaces/flightsResponse.interface";

export interface Booking{
  id?:                number;
  booking_date:      Date;
  passengers_number: number;
  flights:           number[];
  user:              number;
}


export interface BookingByID {
  id:                number;
  booking_date:      Date;
  passengers_number: number;
  flights:           FlightShort[];
  user:              User;
}
export interface BookingByUser {
  id:                number;
  booking_date:      Date;
  passengers_number: number;
  user:              User;
  flights:           FlightShort[];
}


export interface GetBookings {
  id:                number;
  booking_date:      Date;
  passengers_number: number;
  flights:           Flight[];
  user:              User;
}

