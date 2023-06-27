import { Component, OnInit } from '@angular/core';
import { HorariosGeneradosService } from '../../services/horarios-generados.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-tab-view-horarios-generados',
  templateUrl: './tab-view-horarios-generados.component.html'
})
export class TabViewHorariosGeneradosComponent implements OnInit {


  activeIndex: number = 0;
  msgs1!: Message[];

  constructor(public horariosGeneradosService: HorariosGeneradosService) { }

  ngOnInit(): void {
    this.msgs1 = [
      {severity:'info', summary:'No se ha podido generar ningún horario'},
    ];


  }

}
