import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '../../node_modules/@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { WikipediaService } from './services/wikipedia.service';
import { CustomerServiceService } from './services/customer-service.service';
import { DataService } from './data.service';
import { CustomerComponent } from './customer/customer.component';
import { CustomerApiComponent } from './customer-api/customer-api.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { ObserverComponent } from './observer/observer.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CustomerComponent,
    CustomerApiComponent,
    WikipediaComponent,
    ObserverComponent,
    SpeakersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JsonpModule,
    CommonModule
  ],
  providers: [DataService, CustomerServiceService, WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
