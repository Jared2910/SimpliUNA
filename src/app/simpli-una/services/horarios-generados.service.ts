import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';
import { CursosRegistradosService } from './cursos-registrados.service';
import { Observable, delay, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosGeneradosService {

  cursosAgregados: Curso[] = [];
  fechaReferencia = new Date(1970, 0, 1);
  horariosGenerados: Curso[][] = [];

  constructor(private cursosRegistradosService: CursosRegistradosService) { }

  resetData(){
    this.horariosGenerados = [];
  }

  borrarCursoDeLaLista(NRC: string) {
    this.cursosRegistradosService.eliminarCurso(NRC);
  }

  generarHorarios() {
    this.cursosAgregados = this.cursosRegistradosService.getCursos;
    if(this.cursosAgregados.length === 0){
      return false;
    }



    let listaDeCodigos = this.extraerCodigos(this.cursosAgregados);
    let combinacionesDehorarios = this.combinaciones(this.cursosAgregados, Object.keys(listaDeCodigos).length);
    let horariosFiltrados = this.eliminarHorariosRepetidos(combinacionesDehorarios);


    horariosFiltrados.forEach(horario => {
      if (!this.tieneChoqueDeHorario(horario)) {
        this.horariosGenerados.push(horario);
      }
    });

    return this.horariosGenerados.length >= 1 ? true : false;
  }

  tieneChoqueDeHorario(horario: Curso[]): boolean {
    let HorarioTemporal: { [key: string]: Array<[Date, Date]> } = {};
    let dias: string[] = [];
    let horasDeEntrada: Date[] = [];
    let horasDeSalida: Date[] = [];
    let tuplasEntradasSalidas: Array<[Date, Date]> = [];
    let hayChoqueDeHorario: boolean = false;

    let horaEntrada1;
    let horaEntrada2;

    let horaSalida1;
    let horaSalida2;

    horario.forEach(curso => {
      dias = curso.dias;
      curso.hora_entrada.forEach(horaEntrada => horasDeEntrada.push(new Date(horaEntrada)));
      curso.hora_salida.forEach(horaSalida => horasDeSalida.push(new Date(horaSalida)));

      dias.forEach((dia, indice) => {
        if (HorarioTemporal[dia] === undefined) {
          HorarioTemporal[dia] = [[horasDeEntrada[indice], horasDeSalida[indice]]];
        } else {
          tuplasEntradasSalidas = HorarioTemporal[dia];

          tuplasEntradasSalidas.forEach((tupla, index) => {
            horaEntrada1 = new Date(this.fechaReferencia.getTime() + new Date(curso.hora_entrada[index]).getTime() % 86400000);
            horaEntrada2 = new Date(this.fechaReferencia.getTime() + new Date(tupla[0]).getTime() % 86400000);

            horaSalida1 = new Date(this.fechaReferencia.getTime() + new Date(curso.hora_salida[index]).getTime() % 86400000);
            horaSalida2 = new Date(this.fechaReferencia.getTime() + new Date(tupla[1]).getTime() % 86400000);

            if (horaEntrada1.getTime() > horaEntrada2.getTime() && horaEntrada1.getTime() < horaSalida2.getTime()
              || horaSalida1.getTime() > horaEntrada2.getTime() && horaSalida1.getTime() < horaSalida2.getTime()) {
              hayChoqueDeHorario = true;
            } else {
              HorarioTemporal[dia].push([horasDeEntrada[indice], horasDeSalida[indice]]);
            }

          });
        }
      })

    });

    return hayChoqueDeHorario;
  }

  tieneCursosRepetidos(horario: Curso[]): boolean {
    let codigos: { [key: string]: number } = this.extraerCodigos(horario);
    let tieneRepetidos = false;

    Object.values(codigos).forEach(sumatoriaCodigos => {
      if (sumatoriaCodigos > 1) {
        tieneRepetidos = true
      }
    });
    return tieneRepetidos
  }

  eliminarHorariosRepetidos(horarios: Curso[][]) {

    let horariosFiltrados: Curso[][] = [];

    horarios.forEach(horario => {
      if (!this.tieneCursosRepetidos(horario)) {
        horariosFiltrados.push(horario);
      }
    });

    return horariosFiltrados;
  }

  extraerCodigos(horario: Curso[]): { [key: string]: number } {
    let codigos: { [key: string]: number } = {};
    let cursos: Curso[] = horario;

    cursos.forEach(curso => {
      let codigo = curso.codigo;

      if (codigos[codigo] === undefined) {
        codigos[codigo] = 1;
      } else {
        codigos[codigo] += 1;
      }
    });
    return codigos;
  }

  combinaciones<T>(arr: T[], length: number): T[][] {
    let res: T[][] = [];
    let combinationsHelper = (current: T[], index: number) => {
      if (current.length === length) {
        res.push([...current]);
        return;
      }

      for (let i = index; i < arr.length; i++) {
        current.push(arr[i]);
        combinationsHelper(current, i + 1);
        current.pop();
      }
    };

    combinationsHelper([], 0);
    return res;
  }

}
