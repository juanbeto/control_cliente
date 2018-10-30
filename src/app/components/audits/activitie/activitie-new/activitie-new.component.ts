import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { auditactivities } from '../../../../models/index_audit';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-activitie-new',
  templateUrl: './activitie-new.component.html',
  styleUrls: ['./activitie-new.component.css']
})
export class ActivitieNewComponent implements OnInit {
    public label_title: string;
    public label_begin: string;
    public label_end: string;
    public label_name: string;
    public label_numerals_iso: string;
    public label_numerals_meci: string;
    public label_numerals: string;
    public label_auditor: string;
    public activitie = new auditactivities(null,null,null,null,null,null,null,null);

    @Output() formactivities: EventEmitter<number>;

  constructor() {
    this.label_title = "Nueva ";
    this.label_begin = "Fecha Inicio";
    this.label_end = "Fecha Cierre";
    this.label_name = "Proceso/Actividad";
    this.label_numerals_iso = "ISO 9001";
    this.label_numerals_meci = "MECI";
    this.label_numerals = "Numeral";
    this.label_auditor = "Auditor";
    this.formactivities = new EventEmitter();
  }

  ngOnInit() {

  }

  ocultarActividad( val){
    this.formactivities.emit(1);
  }

}
