import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { riskstype } from '../../models/index_risks';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private url_service: string;
  public url: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"risks/type";
  }

  create(type: riskstype): Observable<any>{}

  getTypes(): Observable<any>{}

  getType(id): Observable<any>{}
}
