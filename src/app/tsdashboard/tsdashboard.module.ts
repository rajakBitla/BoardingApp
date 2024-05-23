import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsdashboardPageRoutingModule } from './tsdashboard-routing.module';

import { TsdashboardPage } from './tsdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsdashboardPageRoutingModule
  ],
  declarations: [TsdashboardPage]
})
export class TsdashboardPageModule {}
