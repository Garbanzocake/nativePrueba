import { IsString,IsDateString } from 'class-validator';


export class CreateFlightDto {

  @IsString()
  airline: string;

  @IsString()
  flight_number: string;

  @IsString()
  origin: string;
  @IsString()
  destination: string;

  @IsDateString()
  arrival_date:string;

  @IsDateString()
  departure_date:string;

  

  
}
