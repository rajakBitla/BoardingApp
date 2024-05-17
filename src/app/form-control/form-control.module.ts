import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormControlPageRoutingModule } from './form-control-routing.module';

import { FormControlPage } from './form-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormControlPageRoutingModule
  ],
  declarations: [FormControlPage]
})
export class FormControlPageModule {}
