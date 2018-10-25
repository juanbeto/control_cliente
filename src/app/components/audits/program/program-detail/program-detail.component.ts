import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditprogram, auditformat, audit } from '../../../../models/index_audit';
import { ProgramService } from '../../../../services/audits/program.service';
import { FormatService } from '../../../../services/audits/format.service';
import { AuditService } from '../../../../services/audits/audit.service';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {

  public label_title: string;
  public label_id: string;
  public label_begin: string;
  public label_end: string;
  public label_objectives: string;
  public label_scope: string;
  public label_responsabilities: string;
  public label_approved: string;
  public label_resource: string;
  public label_observation: string;
  public label_enable: string;
  public label_is_delete: string;
  public label_periodo: string;
  public actions: string;
  public program : auditprogram;
  public audits[] : audit;

  public format = new auditformat(null,null,null,null,'_PlanAuditIntern');

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _programService: ProgramService,
    private _formatService: FormatService,
    private _auditService: AuditService
  ) {
    this.label_title = 'Nueva Programación';
    this.label_id= '#';
    this.label_begin= 'Inicio';
    this.label_end= 'Final';
    this.label_objectives= 'Objetivos';
    this.label_scope= 'Alcance';
    this.label_responsabilities= 'Responsables';
    this.label_approved= 'Aprobado';
    this.label_resource= 'Recursos';
    this.label_observation= 'Observaciones';
    this.label_enable= 'Habilitado';
    this.label_is_delete= 'Eliminado';
    this.label_periodo = 'Periodo de Ejecución';
    this.actions = 'Acciones';
    this.program = new auditprogram(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
   }

  ngOnInit() {
    console.log('program.list component cargado correctamente');
    this.getFormat()
    this.getProgram();
  }

  getFormat(){
    this._formatService.getFormatBy(this.format).subscribe(
      response=>{
        this.format = response.formats[0];
      },
      error=>{
        console.log(<any>error);
      }
    );
  }



  getProgram(){
    this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this._programService.getProgram(id).subscribe(
          response => {
            if(response.status == 'success'){
              this.program = response.program;
              this.getAudits();
            }else{
              this._router.navigate(['audits/program']);
            }
          },
          error => {
            console.log(<any>error);
          }
        );
      }
    );
  }

  getAudits(){
    this._auditService.getAuditsByProgram(this.program.ID).subscribe(
      response =>{

        if(response.status == 'success'){
          this.audits = response.audits;
        }
      },
      error=>{
          console.log(error);
      }
    );
  }


}
