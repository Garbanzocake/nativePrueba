import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post()
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightsService.create(createFlightDto);
  }

  
  @Get()
  findAll() {
    return this.flightsService.findAll();
  }

  @Get('/farDate')
  findAllOrderedByDate() {
    return this.flightsService.findAllOrderedByFarestDate();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightsService.findFlightById(Number(id));
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFlightDto: UpdateFlightDto) {
  //   return this.flightsService.update(+id, updateFlightDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.flightsService.remove(+id);
  // }
}
