import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PassengersPage } from './passengers/passengers.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { BoardPassengerPage } from './board-passenger/board-passenger.page';
import { AddPassengerPage } from './add-passenger/add-passenger.page';

@NgModule({
  declarations: [AppComponent,PassengersPage,DashboardPage,BoardPassengerPage,AddPassengerPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,QRCodeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
