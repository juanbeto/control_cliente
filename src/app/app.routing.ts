import {  ModuleWithProviders } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';

//component
import { AreasDetailComponent } from './components/areas/areas-detail/areas-detail.component';

const appRoutes: Routes = [
  {path:'/areas', component: AreasDetailComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
