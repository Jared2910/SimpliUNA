import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../../interfaces/curso.interface';

@Component({
  selector: 'app-tabla-horario-generado',
  templateUrl: './tabla-horario-generado.component.html',
  styles: [
  ]
})
export class TablaHorarioGeneradoComponent implements OnInit {


  @Input() horario: Curso[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
