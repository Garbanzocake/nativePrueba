import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';





import { AuthModule } from './modules/auth/auth.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { FlightsModule } from './modules/flights/flights.module';

import { Users } from './modules/auth/entities/user.entity';
import { Flight } from './modules/flights/entities/flight.entity';
import { Booking } from './modules/bookings/entities/booking.entity';
import { BookingFlight } from './modules/bookings/entities';




@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port:  +process.env.DB_PORT ,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Users,Flight,Booking,BookingFlight],
      autoLoadEntities: true,
      synchronize: true,
    }),
    FlightsModule,
    BookingsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(){
    
  }

}
