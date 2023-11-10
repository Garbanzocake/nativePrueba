import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsTableComponent } from './components/flights-table/flights-table.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { SearchComponent } from './components/search/search.component';
import { FlightDetailComponent } from './components/flight-detail/flight-detail.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FlightsComponent, FlightsTableComponent, SearchComponent, FlightDetailComponent],
  imports: [CommonModule, FlightsRoutingModule,MaterialModule,ReactiveFormsModule],
  exports:[FlightDetailComponent]
})
export class FlightsModule {}
