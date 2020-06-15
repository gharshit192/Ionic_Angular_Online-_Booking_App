import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { 
    path: 'places', 
    loadChildren: './places/places.module#PlacesPageModule',
    canLoad:[AuthGuard] 
  },
  {  
    path: 'bookings', 
    loadChildren: './bookings/bookings.module#BookingsPageModule', 
    canLoad:[AuthGuard] 
  },
  { path: 'discover', loadChildren: './places/discover/discover.module#DiscoverPageModule' },  
  { path: 'place-detail', loadChildren: './places/discover/place-detail/place-detail.module#PlaceDetailPageModule' },
  { path: 'offers', loadChildren: './places/offers/offers.module#OffersPageModule'},
  { path: 'edit-offer', loadChildren: './places/offers/edit-offer/edit-offer.module#EditOfferPageModule' },
  { path: 'new-offer' , loadChildren: './places/offers/new-offer/new-offer.module#NewOfferPageModule' },
  { path: 'offer-bookings' , loadChildren: './places/offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
