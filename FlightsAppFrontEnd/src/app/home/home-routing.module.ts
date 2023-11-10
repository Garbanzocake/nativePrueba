import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'flights',
        loadChildren: () =>
          import('../flights/flights.module').then((m) => m.FlightsModule),
      },
      {
        path: 'bookings',
        canActivate: [isAuthenticatedGuard],
        loadChildren: () =>
          import('../bookings/bookings.module').then((m) => m.BookingsModule),
      },

      { path: '**', redirectTo: 'flights' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

