import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbusesPage } from './searchbuses.page';

const routes: Routes = [
  {
    path: '',
    component: SearchbusesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbusesPageRoutingModule {}
