import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { auditplanning, auditquestion } from '../../../../models/index_audit';

@Component({
  selector: 'app-planning-new',
  templateUrl: './planning-new.component.html',
  styleUrls: ['./planning-new.component.css']
})
export class PlanningNewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlanningNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
