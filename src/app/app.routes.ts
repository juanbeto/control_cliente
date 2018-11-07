import {  ModuleWithProviders } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

//Estructura del portal
import { HomeComponent } from './components/home/home.component';
//component
import { AreasDetailComponent } from './components/audits/areas-detail/areas-detail.component';
import { QuestionDetailComponent } from './components/audits/question-detail/question-detail.component';
import { QuestionUpdateComponent } from './components/audits/question-update/question-update.component';
import { QuestionNewComponent } from './components/audits/question-new/question-new.component';
import { QuestionListComponent } from './components/audits/question-list/question-list.component';

import { FormatListComponent } from './components/audits/format/format-list/format-list.component';
import { FormatDetailComponent } from './components/audits/format/format-detail/format-detail.component';
import { FormatNewComponent } from './components/audits/format/format-new/format-new.component';
import { FormatUpdateComponent } from './components/audits/format/format-update/format-update.component';

import { ProgramListComponent } from './components/audits/program/program-list/program-list.component';
import { ProgramDetailComponent } from './components/audits/program/program-detail/program-detail.component';
import { ProgramNewComponent } from './components/audits/program/program-new/program-new.component';
import { ProgramUpdateComponent } from './components/audits/program/program-update/program-update.component';

import { AuditListComponent } from './components/audits/audit/audit-list/audit-list.component';
import { AuditDetailComponent } from './components/audits/audit/audit-detail/audit-detail.component';
import { AuditNewComponent } from './components/audits/audit/audit-new/audit-new.component';
import { AuditUpdateComponent } from './components/audits/audit/audit-update/audit-update.component';

import { AuditListRunComponent } from './components/audits/audit/audit-list-run/audit-list-run.component';



const appRoutes: Routes = [
  {path:'audits/areas', component: AreasDetailComponent },
  {path:'audits/question', component: QuestionListComponent },
  {path:'audits/question-new', component: QuestionNewComponent },
  {path:'audits/question/:id', component: QuestionDetailComponent },
  {path:'audits/question-update/:id', component: QuestionUpdateComponent },

  {path:'audits/format', component: FormatListComponent },
  {path:'audits/format-new', component: FormatNewComponent },
  {path:'audits/format/:id', component: FormatDetailComponent },
  {path:'audits/format-update/:id', component: FormatUpdateComponent },

  {path:'audits/program', component: ProgramListComponent },
  {path:'audits/program-new', component: ProgramNewComponent },
  {path:'audits/program/:id', component: ProgramDetailComponent },
  {path:'audits/program-update/:id', component: ProgramUpdateComponent },

  {path:'audits/audit', component: AuditListComponent },
  {path:'audits/audit-new', component: AuditNewComponent },
  {path:'audits/audit/:id', component: AuditDetailComponent },
  {path:'audits/audit-update/:id', component: AuditUpdateComponent },

  {path:'audits/list-run', component: AuditListRunComponent },
  //AuditListRun

  {path:'home', component: HomeComponent },

  {path:'**', pathMatch: 'full', redirectTo: '' }
];


export const appRoutingProviders: any[] = [];
export const APP_ROUTING = RouterModule.forRoot(appRoutes);
