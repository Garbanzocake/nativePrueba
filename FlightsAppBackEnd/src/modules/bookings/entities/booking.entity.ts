import {Entity,Column,PrimaryGeneratedColumn,ManyToOne, OneToMany} from 'typeorm';


import { Users as User} from 'src/modules/auth/entities/user.entity';
import { BookingFlight } from './booking-flight.entity';

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ type: 'timestamp'})
    booking_date:Date

 
    @Column()
    passengers_number:number;

    @Column({default:true})
    isActive:boolean;


    @ManyToOne(() => User,user => user.bookings)
     user: User;

    @OneToMany(
    () => BookingFlight,
    (bookingFlight)=>bookingFlight.booking,
    {cascade:true})
    flights?: BookingFlight[];

    


    
}
