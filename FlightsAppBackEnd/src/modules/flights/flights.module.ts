import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { Flight } from './entities/flight.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  exports:[TypeOrmModule,FlightsService],
  controllers: [FlightsController],
  providers: [FlightsService],
})
export class FlightsModule {}
