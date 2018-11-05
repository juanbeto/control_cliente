import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { auditplanning, auditquestion } from '../../../../models/index_audit';
import { PlanningNewComponent } from '../planning-new/planning-new.component';

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.css']
})
export class PlanningListComponent implements OnInit {
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
  public actions: string;

  @Input() public plannings: auditplanning;

  // public dialog: MatDialog;

  constructor(public dialog: MatDialog) {
    this.label_id = "#";
    this.label_area = "Area";
    this.label_cycle = "Ciclo";
    this.label_question = "Pregunta";
    this.label_numerals_iso = "ISO 9001";
    this.label_numerals_meci = "MECI";
    this.label_numerals= "Numeral";
    this.label_records = "Registro";
    this.label_observation = "Observacion";
    this.label_accordance = "Conformidad";
    this.label_actions = "Acciones";
    this.actions = "Actiones";
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PlanningNewComponent, {
      width: '80%',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // /this.animal = result;
    });
  }

}
