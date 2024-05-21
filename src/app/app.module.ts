import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PassengersPage } from './passengers/passengers.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { BoardPassengerPage } from './board-passenger/board-passenger.page';
import { AddPassengerPage } from './add-passenger/add-passenger.page';
import { FormControlPage } from './form-control/form-control.page';
import { HttpClientModule } from '@angular/common/http';
import { SearchbusesPage } from './searchbuses/searchbuses.page';
import { CityPage } from './city/city.page';

@NgModule({
  declarations: [
    AppComponent,
    PassengersPage,
    DashboardPage,
    BoardPassengerPage,
    AddPassengerPage,
    FormControlPage,
    SearchbusesPage,
    CityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    QRCodeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
