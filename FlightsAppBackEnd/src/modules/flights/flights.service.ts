import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from './entities/flight.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flight)
    private flightsRepository: Repository<Flight>,
  ) {}

  async create(createFlightDto: CreateFlightDto): Promise<Flight> {
    const flight = this.flightsRepository.create(createFlightDto);

    return await this.flightsRepository.save(flight);
  }

  findAll(): Promise<Flight[]> {
    return this.flightsRepository.find();
  }

  async findAllOrderedByFarestDate() {
    let flights = await this.findAll();

    let flightsFarDate = flights.sort(
      (a, b) => b.departure_date.getTime() - a.departure_date.getTime(),
    );

    return flightsFarDate;
  }

  async findFlightById(id: number) {
    try {
      const flight = await this.flightsRepository.findOneBy({ id });
      return flight;
    } catch (error) {
      throw new BadRequestException(`ID de vuelo${id} no existe`);
    }
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}
