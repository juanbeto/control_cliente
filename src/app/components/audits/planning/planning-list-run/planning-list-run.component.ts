import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { auditplanning, auditquestion } from '../../../../models/index_audit';
import { PlanningNewComponent } from '../planning-new/planning-new.component';
import { PlanningService } from '../../../../services/audits/planning.service';

@Component({
  selector: 'app-planning-list-run',
  templateUrl: './planning-list-run.component.html',
  styleUrls: ['./planning-list-run.component.css']
})
export class PlanningListRunComponent implements OnInit {
  public label_id: string;
  public label_area: string;
  public label_cycle: string;
  public label_question: string;
  public label_numerals_iso: string;
  public label_numerals_meci: string;
  public label_numerals: string;
  public label_records: string;
  public label_observation: string;
  public label_accordance: string;
  public label_actions: string;


  public idAudit: number;

  @Input() public plannings: auditplanning;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _planningService: PlanningService,
    public dialog: MatDialog) {

      this.label_id = "#";
      this.label_area = "Area";
      this.label_cycle = "Ciclo";
      this.label_question = "Pregunta";
      this.label_numerals_iso = "ISO 9001";
      this.label_numerals_meci = "MECI";
      this.label_numerals= "Numeral";
      this.label_records = "Registro";
      this.label_observation = "Comentario/Observacion/Conclusión";
      this.label_accordance = "AR/NC/AM";
      this.label_actions = "Hallazgos";

    }

  ngOnInit() {
  }

}
