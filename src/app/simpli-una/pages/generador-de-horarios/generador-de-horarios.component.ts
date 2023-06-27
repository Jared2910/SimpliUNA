import { Component, OnInit } from '@angular/core';
import { HorariosGeneradosService } from '../../services/horarios-generados.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-generador-de-horarios',
  templateUrl: './generador-de-horarios.component.html',
  styles: [
  ]
})
export class GeneradorDeHorariosComponent implements OnInit {

  constructor(private horariosGeneradosService: HorariosGeneradosService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Por favor, agregue algunos cursos a la lista' });
  }

  generarHorarios() {
    this.horariosGeneradosService.resetData();
    let exito = this.horariosGeneradosService.generarHorarios();

    if (!exito) {
      this.showInfo()
    }
  }

}
