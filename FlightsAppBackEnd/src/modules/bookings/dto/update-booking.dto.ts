import { IsArray, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateBookingDto {
  @IsNumber()
  readonly id: number;

  @IsDateString()
  readonly booking_date: string;

  @IsNumber()
  readonly passengers_number: number;

  @IsNumber()
  readonly user: number;

  @IsNumber({}, { each: true })
  @IsArray()
  
  readonly flights?: number[];
}
