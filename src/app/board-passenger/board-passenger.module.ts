import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardPassengerPageRoutingModule } from './board-passenger-routing.module';

import { BoardPassengerPage } from './board-passenger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardPassengerPageRoutingModule
  ],
  declarations: [BoardPassengerPage]
})
export class BoardPassengerPageModule {}
