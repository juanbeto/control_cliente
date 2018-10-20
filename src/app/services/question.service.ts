import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { auditquestion } from '../models/auditquestion';


@Injectable()
export class QuestionService{
  private url_service: string;
  public url: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"audit/question";
  }

  prueba(){
    return "HGola mundo";
  }

  create(question: auditquestion): Observable<any>{
    let json = JSON.stringify(question);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }
}
