import {Entity,Column,PrimaryGeneratedColumn,OneToMany, OneToOne, JoinColumn} from 'typeorm';
import { Booking } from 'src/modules/bookings/entities/booking.entity';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id?:number;

    @Column({ unique:true})
    email:string;

    @Column()
    password?:string;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column({default:true})
    isActive:boolean;

    @OneToMany(() => Booking, booking => booking.user,{cascade:true})
    bookings: Booking[];

 

}

