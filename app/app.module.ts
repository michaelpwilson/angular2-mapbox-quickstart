import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapBoxModule }  from 'angular2-mapbox/core';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    MapBoxModule.forRoot("pk.eyJ1IjoibXdpbHMiLCJhIjoiY2l3NmVxMXR2MDAxbzJ5cGF0cGlzNWU3ZSJ9.vEINzQUrL-dpqV2Y6fvhpQ")
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
