import { IsArray, IsDateString, IsNumber, IsOptional,  } from 'class-validator';


export class CreateBookingDto {
  @IsDateString()
  booking_date: string;

  @IsNumber()
  passengers_number: number;

  @IsNumber()
  user: number;

  
  @IsNumber({},{each:true})
  @IsArray()
  flights: number[];
}
