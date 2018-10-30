import { Component, OnInit, Input } from '@angular/core';
import { auditactivities } from '../../../../models/index_audit';

@Component({
  selector: 'app-activitie-list',
  templateUrl: './activitie-list.component.html',
  styleUrls: ['./activitie-list.component.css']
})
export class ActivitieListComponent implements OnInit {
  public label_id: string;
  public label_begin: string;
  public label_end: string;
  public label_name: string;
  public label_numerals_iso: string;
  public label_numerals_meci: string;
  public label_numerals: string;
  public label_auditor: string;
  public actions: string;

  public activitie = new auditactivities(null,null,null,null,null,null,null,null);

  @Input() public activities: auditactivities;

  constructor() {
    this.label_id = "#";
    this.label_begin= "Fecha Inicio";
    this.label_end= "Fecha Cierre";
    this.label_name= "Proceso/Actividad";
    this.label_numerals_iso= "ISO 9001";
    this.label_numerals_meci= "MECI";
    this.label_numerals= "Numeral";
    this.label_auditor= "Auditor";
    this.actions = "Acciones";
  }

  ngOnInit() {
  }

  ocultarActividad(){
    //this.show_activities = false;
  }

}
