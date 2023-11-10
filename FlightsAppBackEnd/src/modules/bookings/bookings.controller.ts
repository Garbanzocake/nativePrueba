import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';


import { Users as User } from 'src/modules/auth/entities/user.entity';
import { AuthGuard } from '../auth/guards/auth.guard';
import { FlightsService } from '../flights/flights.service';
import { UpdateBookingDto } from './dto/update-booking.dto';


@Controller('bookings')
export class BookingsController {
  constructor(
    private readonly bookingsService: BookingsService,
    private readonly flightService: FlightsService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Request() req: Request ,@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.create(createBookingDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

  
  @UseGuards(AuthGuard)
  @Get('/user')
  findAllByUser(@Request() req:Request) {
    const user= req['user'] as User;
    return this.bookingsService.findBookingsByUser(user);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findBookingById(Number(id));
  }


  

  // @UseGuards(AuthGuard)
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateBookingDto: UpdateBookingDto) {
  //   return this.bookingsService.update(+id, updateBookingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bookingsService.remove(+id);
  // }
}
