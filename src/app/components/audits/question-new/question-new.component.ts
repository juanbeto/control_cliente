import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditquestion } from '../../../models/auditquestion';
import { QuestionService } from '../../../services/question.service';


@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css'],
  providers: [ QuestionService ]
})
export class QuestionNewComponent implements OnInit {
  public page_title: string;
  public page_name: string;
  public question: auditquestion;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _questionService: QuestionService

  ) {
    this.page_title = 'Nueva pregunta';
    this.page_name = '¿Pregunta?';
  }

  onSubmit(){
    this._questionService.create(this.question).subscribe(
      response => {
        console.log(response);
        this.question = response.question;
      },
      error => {
        console.log(<any>error);
      }
    );
   }

  ngOnInit() {
    this.question= new auditquestion(null, '');
  }

}
