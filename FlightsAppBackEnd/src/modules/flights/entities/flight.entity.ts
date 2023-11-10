import { BookingFlight } from 'src/modules/bookings/entities';
import { Booking } from 'src/modules/bookings/entities/booking.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  airline: string;

  @Column()
  flight_number: string;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column({ type: 'timestamp' })
  arrival_date: Date;

  @Column({ type: 'timestamp' })
  departure_date: Date;

  @Column({ default: 100 })
  available_seats: number;

  @Column({ default: 200 })
  passenger_seats: number;

//   @ManyToOne(() => Booking, (booking) => booking.flights)
//   bookings: Booking[];

  @OneToMany(() => BookingFlight, (bookingFlight) => bookingFlight.booking, {
    cascade: true,
  })
  flights?: BookingFlight[];
}
