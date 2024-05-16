import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardPassengerPage } from './board-passenger.page';

const routes: Routes = [
  {
    path: '',
    component: BoardPassengerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardPassengerPageRoutingModule {}
