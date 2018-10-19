import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditquestion } from '../../../models/auditquestion';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {
  public page_title: string;
  public page_name: string;
  public question: auditquestion;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.page_title = 'Nueva pregunta';
    this.page_name = '¿Pregunta?';
  }

  onSubmit(a: any){
    console.log(a);
   }

  ngOnInit() {
    this.question= new auditquestion();
  }

}
