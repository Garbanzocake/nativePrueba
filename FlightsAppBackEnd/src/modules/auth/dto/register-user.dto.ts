import { IsEmail, IsString, MinLength } from 'class-validator';
import { CreateBookingDto } from 'src/modules/bookings/dto/create-booking.dto';

export class RegisterUserDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  bookings:CreateBookingDto[];
}

