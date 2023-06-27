import { Component, OnInit } from '@angular/core';
import { CursosRegistradosService } from '../../services/cursos-registrados.service';
import { TableCols } from '../../interfaces/table.interface';

@Component({
  selector: 'app-tabla-cursos-registrados',
  templateUrl: './tabla-cursos-registrados.component.html',
  styles: [
  ]
})
export class TablaCursosRegistradosComponent implements OnInit {


  cols: TableCols[] = [
    { field: 'NRC', header: 'NRC', type: 'text' },
    { field: 'CURSO', header: 'Curso', type: 'text' },
    { field: 'CODIGO', header: 'Código', type: 'text' },
    { field: 'PROFESOR', header: 'Profesor', type: 'text' },
    { field: 'DIAS', header: 'Dias', type: 'text' },
    { field: 'HORARIO', header: 'Horario', type: 'text' },
    { field: 'OPTIONS', header: '', type: 'text' },
  ]

  constructor(public cursosRegistrados: CursosRegistradosService) { }

  ngOnInit(): void {
  }

  borrarCursoRegistrado(NRC: string){
    this.cursosRegistrados.eliminarCurso(NRC)
  }

}
