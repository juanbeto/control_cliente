import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { AreasDetailComponent } from './components/areas/areas-detail/areas-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasDetailComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
