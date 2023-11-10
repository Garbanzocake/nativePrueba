import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';

import { AuthModule } from '../auth/auth.module';
import { FlightsModule } from '../flights/flights.module';

import {Booking,  BookingFlight} from './entities';




@Module({
  imports: [
    AuthModule,
    FlightsModule,
    TypeOrmModule.forFeature([Booking,BookingFlight])],
  exports:[TypeOrmModule],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}
