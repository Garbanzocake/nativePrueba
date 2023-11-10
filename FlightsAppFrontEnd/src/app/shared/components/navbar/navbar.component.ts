import { Component, Input, OnInit, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {



  private authService=inject(AuthService);

  // public user: User | null  = this.authService.currentUser();
  public user= computed(()=>this.authService.currentUser());
  private router= inject(Router);




  onLogOut(){
    this.authService.logOut();
  }
  onLogin(){
    this.router.navigateByUrl('/auth/login');
  }
}
