import { Component, OnInit } from '@angular/core';
import { CursosRegistradosService } from '../../services/cursos-registrados.service';

@Component({
  selector: 'app-tabla-cursos-registrados',
  templateUrl: './tabla-cursos-registrados.component.html',
  styles: [
  ]
})
export class TablaCursosRegistradosComponent implements OnInit {

  constructor(public cursosRegistrados: CursosRegistradosService) { }

  ngOnInit(): void {
  }

}
