import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsdashboardPage } from './tsdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TsdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsdashboardPageRoutingModule {}
