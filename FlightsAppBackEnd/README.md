# Installation

Correr el comando ``npm install`` para los modulos de node.

>La base de datos es Posgresql v16 ,para conectarla se debe crear el archivo .env en el nivel del gitignore con los valores respectivos ,los usados estaran en blanco en el .env.template para reemplazar.
>Jwt_Seed es un secret para la creacion de token.

## Running the app

para correr la aplicacion correr el comando ``npm run start:dev``

### Querie de llenado para los vuelos en la base de datos

``INSERT INTO flight (airline, flight_number, origin, destination, departure_date,arrival_date, available_seats,passenger_seats)
VALUES
  ('American Airlines', 'AA101', 'New York', 'Los Angeles', '2023-11-01 08:00:00', '2023-11-01 11:00:00', 150,200 ),
  ('Delta Air Lines', 'DL202', 'Los Angeles', 'Chicago', '2023-11-02 10:00:00', '2023-11-02 13:00:00', 120,200),
  ('United Airlines', 'UA303', 'Chicago', 'Miami', '2023-11-03 09:30:00', '2023-11-03 12:30:00', 100,200),
  ('Southwest Airlines', 'SW404', 'Miami', 'Dallas', '2023-11-04 11:15:00', '2023-11-04 14:15:00', 110,200),
  ('JetBlue Airways', 'JB505', 'Dallas', 'Denver', '2023-11-05 07:45:00', '2023-11-05 10:45:00', 130,200),
  ('Alaska Airlines', 'AS606', 'Denver', 'Seattle', '2023-11-06 14:30:00', '2023-11-06 17:30:00', 90,200),
  ('British Airways', 'BA707', 'London', 'New York', '2023-11-07 12:30:00', '2023-11-07 17:00:00', 180,200),
  ('Air Canada', 'AC808', 'Toronto', 'Vancouver', '2023-11-08 10:45:00', '2023-11-08 13:45:00', 140,200),
  ('Qantas', 'QF909', 'Sydney', 'Los Angeles', '2023-11-09 15:00:00', '2023-11-09 21:00:00', 200,200),
  ('Emirates', 'EK1010', 'Dubai', 'New York', '2023-11-10 16:30:00', '2023-11-10 20:30:00', 160,200);
``
