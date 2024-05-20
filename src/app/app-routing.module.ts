import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PassengersPage } from './passengers/passengers.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { BoardPassengerPage } from './board-passenger/board-passenger.page';
import { AddPassengerPage } from './add-passenger/add-passenger.page';
import { FormControlPage } from './form-control/form-control.page';
import { SearchbusesPage } from './searchbuses/searchbuses.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'searchbuses',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component:DashboardPage
    // loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'passengers',
    component:PassengersPage
    // loadChildren: () => import('./passengers/passengers.module').then( m => m.PassengersPageModule)
  },
  {
    path: 'add-passenger',
    component:AddPassengerPage
    // loadChildren: () => import('./add-passenger/add-passenger.module').then( m => m.AddPassengerPageModule)
  },
  {
    path: 'board-passenger',
    component:BoardPassengerPage
    // loadChildren: () => import('./board-passenger/board-passenger.module').then( m => m.BoardPassengerPageModule)
  },
  {
    path: 'form-control',
    component:FormControlPage
    // loadChildren: () => import('./form-control/form-control.module').then( m => m.FormControlPageModule)
  },
  {
    path: 'filter-list',
    loadChildren: () => import('./filter-list/filter-list.module').then( m => m.FilterListPageModule)
  },
  {
    path: 'searchbuses',
    component:SearchbusesPage
    // loadChildren: () => import('./searchbuses/searchbuses.module').then( m => m.SearchbusesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
