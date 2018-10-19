import {  ModuleWithProviders } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

//component
import { AreasDetailComponent } from './components/areas/areas-detail/areas-detail.component';

const appRoutes: Routes = [
  {path:'areas', component: AreasDetailComponent},
  {path:'**', pathMatch: 'full', redirectTo: '' }
];


export const appRoutingProviders: any[] = [];
export const APP_ROUTING = RouterModule.forRoot(appRoutes);
