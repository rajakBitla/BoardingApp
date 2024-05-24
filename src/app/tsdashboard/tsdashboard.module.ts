import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSwitchCase,NgSwitch } from '@angular/common';
import {IonContent, IonHeader, IonTitle, IonToolbar, IonicModule } from '@ionic/angular';
import { TsdashboardPageRoutingModule } from './tsdashboard-routing.module';
import { TsdashboardPage } from './tsdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSwitchCase,
    IonicModule,
    NgSwitch,
    TsdashboardPageRoutingModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
  ],
  declarations: [TsdashboardPage]
})
export class TsdashboardPageModule {}
