import { Component, Input,Output,computed, inject, OnInit ,EventEmitter} from '@angular/core';
import { Flight } from '../../interfaces/flightsResponse.interface';


@Component({
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent  {

  @Output()
  public OnFlightReceived:EventEmitter<Flight>=new EventEmitter();

  onFlightClick(flight:Flight):void{
    console.log(`Flight desde el layout de flights, ${flight}`);

    this.OnFlightReceived.emit(flight);
  }


}
