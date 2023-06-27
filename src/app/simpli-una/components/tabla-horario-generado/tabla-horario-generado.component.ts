import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../../interfaces/curso.interface';
import { TableCols } from '../../interfaces/table.interface';

@Component({
  selector: 'app-tabla-horario-generado',
  templateUrl: './tabla-horario-generado.component.html',
  styles: [
  ]
})
export class TablaHorarioGeneradoComponent implements OnInit {


  cols: TableCols[] = [
    { field: 'NRC', header: 'NRC',style:'width: 5%', type: 'text' },
    { field: 'CURSO', header: 'Curso',style:'width: 25%', type: 'text' },
    { field: 'CODIGO', header: 'Código',style:'width: 10%', type: 'text' },
    { field: 'PROFESOR', header: 'Profesor',style:'width: 40%', type: 'text' },
    { field: 'DIAS', header: 'Dias',style:'width: 10%', type: 'text' },
    { field: 'HORARIO', header: 'Horario',style:'width: 10%', type: 'text' },
  ]

  @Input() horario: Curso[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
