import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormControlPage } from './form-control.page';

const routes: Routes = [
  {
    path: '',
    component: FormControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormControlPageRoutingModule {}
