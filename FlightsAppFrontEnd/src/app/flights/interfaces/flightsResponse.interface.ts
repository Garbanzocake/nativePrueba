export interface Flight {
  id:              number;
  airline:         string;
  flight_number:   string;
  origin:          string;
  destination:     string;
  arrival_date:    Date;
  departure_date:  Date;
  available_seats: number;
  passenger_seats: number;
}

export interface FlightShort {
  id:       number;
  flightId: number;
}
