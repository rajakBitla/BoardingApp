import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbusesPageRoutingModule } from './searchbuses-routing.module';

import { SearchbusesPage } from './searchbuses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbusesPageRoutingModule
  ],
  declarations: [SearchbusesPage]
})
export class SearchbusesPageModule {}
