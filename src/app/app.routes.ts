import {  ModuleWithProviders } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

//component
import { AreasDetailComponent } from './components/audits/areas-detail/areas-detail.component';
import { QuestionDetailComponent } from './components/audits/question-detail/question-detail.component';
import { QuestionUpdateComponent } from './components/audits/question-update/question-update.component';
import { QuestionNewComponent } from './components/audits/question-new/question-new.component';

const appRoutes: Routes = [
  {path:'audits/areas', component: AreasDetailComponent },
  {path:'audits/question-new', component: QuestionNewComponent },
  {path:'audits/question/:id', component: QuestionDetailComponent },
  {path:'audits/question-update/:id', component: QuestionUpdateComponent },
  {path:'**', pathMatch: 'full', redirectTo: '' }
];


export const appRoutingProviders: any[] = [];
export const APP_ROUTING = RouterModule.forRoot(appRoutes);
