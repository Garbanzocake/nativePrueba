
import {Column,Entity,ManyToOne,PrimaryGeneratedColumn} from 'typeorm';
import { Booking } from './booking.entity';
import { Flight } from 'src/modules/flights/entities/flight.entity';

@Entity()
export class BookingFlight{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    flightId:number;

    @ManyToOne(
        ()=>Booking,
        (booking)=>booking.flights
    )
    booking:Booking;

    @ManyToOne(
        ()=>Flight,
        (flight)=>flight.flights
    )
    flight:Flight
}