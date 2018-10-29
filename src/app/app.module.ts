import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING, appRoutingProviders } from './app.routes';


import { AppComponent } from './app.component';
import { AreasDetailComponent } from './components/audits/areas-detail/areas-detail.component';
import { QuestionNewComponent } from './components/audits/question-new/question-new.component';
import { QuestionDetailComponent } from './components/audits/question-detail/question-detail.component';
import { QuestionUpdateComponent } from './components/audits/question-update/question-update.component';
import { QuestionListComponent } from './components/audits/question-list/question-list.component';
import { FormatListComponent } from './components/audits/format/format-list/format-list.component';
import { FormatDetailComponent } from './components/audits/format/format-detail/format-detail.component';
import { FormatNewComponent } from './components/audits/format/format-new/format-new.component';
import { FormatUpdateComponent } from './components/audits/format/format-update/format-update.component';
import { ProgramListComponent } from './components/audits/program/program-list/program-list.component';
import { ProgramNewComponent } from './components/audits/program/program-new/program-new.component';
import { ProgramUpdateComponent } from './components/audits/program/program-update/program-update.component';
import { ProgramDetailComponent } from './components/audits/program/program-detail/program-detail.component';
import { AuditListComponent } from './components/audits/audit/audit-list/audit-list.component';
import { AuditNewComponent } from './components/audits/audit/audit-new/audit-new.component';
import { AuditDetailComponent } from './components/audits/audit/audit-detail/audit-detail.component';
import { AuditUpdateComponent } from './components/audits/audit/audit-update/audit-update.component';
import { PlanningListComponent } from './components/audits/planning/planning-list/planning-list.component';
import { ActivitieListComponent } from './components/audits/activitie/activitie-list/activitie-list.component';
import { ActivitieNewComponent } from './components/audits/activitie/activitie-new/activitie-new.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasDetailComponent,
    QuestionNewComponent,
    QuestionDetailComponent,
    QuestionUpdateComponent,
    QuestionListComponent,
    FormatListComponent,
    FormatDetailComponent,
    FormatNewComponent,
    FormatUpdateComponent,
    ProgramListComponent,
    ProgramNewComponent,
    ProgramUpdateComponent,
    ProgramDetailComponent,
    AuditListComponent,
    AuditNewComponent,
    AuditDetailComponent,
    AuditUpdateComponent,
    PlanningListComponent,
    ActivitieListComponent,
    ActivitieNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
