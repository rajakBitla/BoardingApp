import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonicModule } from '@ionic/angular';

import { TestingPageRoutingModule } from './testing-routing.module';

import { TestingPage } from './testing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingPageRoutingModule,
    IonHeader,IonTitle,IonToolbar,IonContent
  ],
  declarations: [TestingPage]
})
export class TestingPageModule {}
