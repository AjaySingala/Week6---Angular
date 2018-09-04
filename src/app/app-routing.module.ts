import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerApiComponent } from './customer-api/customer-api.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { ObserverComponent } from './observer/observer.component';

const routes: Routes = [
  // redirect the root path to home route
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'customerList',
    component: CustomerApiComponent
  },
  {
    path: 'wiki',
    component: WikipediaComponent
  },
  {
    path: 'observer',
    component: ObserverComponent
  }

  // Route that maps to SpeakersComponent that has two children routes 
  // that we will use to introduce our named router outlets.
  // Within the speakers route, we want to be able to display a list of speakers 
  // and the bio for the currently selected speaker. We accomplish this by 
  // adding in two child routes for the SpeakerListComponent and the BioComponent. 
  // Notice that both child routes follow the exact same structure as their 
  // parent route with the presence of a path and component property. 
  // The difference is that we have introduced an outlet property that we will 
  // use to map to a router-outlet in our template.
  // The path for the bio outlet is :id which we will use to send in a route 
  // param to load in a specific speaker
  // , 
  // { path: 'speakers', component: SpeakersComponent, children: [
  // { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
  // { path: ':id', component: BioComponent, outlet: 'bio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
