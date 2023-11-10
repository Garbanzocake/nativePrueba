import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Users as User } from 'src/modules/auth/entities/user.entity';

import { BookingFlight, Booking } from './entities';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingsRepository: Repository<Booking>,

    @InjectRepository(BookingFlight)
    private readonly bookingFlightRepository: Repository<BookingFlight>,

    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    try {
      const { user, flights = [], ...bookingDetails } = createBookingDto;

      const userInfo = await this.usersRepository.findOneBy({ id: user });

      const booking = this.bookingsRepository.create({
        ...bookingDetails,
        flights: flights.map((flight) =>
          this.bookingFlightRepository.create({ flightId: flight }),
        ),
        user: userInfo,
      });

      await this.bookingsRepository.save(booking);
      // console.log(booking);
      return { ...booking };
    } catch (error) {
      console.log(error);
    }
  }

  
  async findAll() {
    const bookings = await this.bookingsRepository.find({
      relations: {
        flights: true,
        user: true,
      },
    });

    return bookings.map((booking) => ({
      ...booking,
      flights: booking.flights.map((flight) => flight.flightId),
      user: {
        id: booking.user.id,
        email: booking.user.email,
        firstName: booking.user.firstName,
        lastName: booking.user.lastName,
        isActive: booking.user.isActive,
      },
    }));
  }

  async findBookingsByUser(user: User) {
    try {
      
      const bookings = await this.bookingsRepository.find({
        relations: {
          flights: true,
          user: true,
        },
        where: { user: user },
      });

      return bookings.map((booking) => ({
        ...booking,
        user: {
          id: booking.user.id,
          email: booking.user.email,
          firstName: booking.user.firstName,
          lastName: booking.user.lastName,
          isActive: booking.user.isActive,
        },
      }));
    } catch (error) {
      throw new BadRequestException(`ID booking ${user.id} doesn't exists`);
    }
  }

  async findBookingById(idBooking: number) {
    try {
      const booking = await this.bookingsRepository.find({
        relations: {
          flights: true,
          user: true,
        },
        where: { id: idBooking },
      });

      return booking.map((booking) => ({
        ...booking,
        user: {
          id: booking.user.id,
          email: booking.user.email,
          firstName: booking.user.firstName,
          lastName: booking.user.lastName,
          isActive: booking.user.isActive,
        },
      }));
    } catch (error) {
      throw new BadRequestException(`ID booking ${idBooking} doesn't exists`);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

 

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
