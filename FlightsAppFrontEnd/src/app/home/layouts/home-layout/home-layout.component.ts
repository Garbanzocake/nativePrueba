import { Component, inject, computed, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Flight } from 'src/app/flights/interfaces/flightsResponse.interface';

@Component({
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {

  private authService=inject(AuthService);
  public user= computed(()=>this.authService.currentUser());
  private activatedRoute= inject(ActivatedRoute);
  private router= inject(Router);


  public flightClicked:any={};





  onLogOut(){
    this.authService.logOut();
  }

  onFlightReceived(flight:Flight):void{
    console.log(`Flight recibido en el home para enviar a bookings`);
    this.flightClicked=flight;
  }


}
