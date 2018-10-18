import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders, Routes } from './app.routing';

import { AppComponent } from './app.component';
import { AreasDetailComponent } from './components/areas/areas-detail/areas-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
