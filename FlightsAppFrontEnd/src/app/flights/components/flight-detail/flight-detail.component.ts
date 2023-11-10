import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Flight } from '../../interfaces/flightsResponse.interface';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css'],
})
export class FlightDetailComponent implements OnChanges {
  @Input()
  flight: number | undefined = undefined;

  public flightInfo!: Flight;

  private readonly flightService = inject(FlightsService);

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.flight !== undefined) {
      this.flightService.getFlight(this.flight).subscribe((resp) => {
        this.flightInfo = resp;
      });
    }
  }
}
