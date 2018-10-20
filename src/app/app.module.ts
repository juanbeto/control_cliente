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

@NgModule({
  declarations: [
    AppComponent,
    AreasDetailComponent,
    QuestionNewComponent,
    QuestionDetailComponent,
    QuestionUpdateComponent
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
