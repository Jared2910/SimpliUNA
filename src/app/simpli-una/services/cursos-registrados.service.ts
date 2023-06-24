import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';
import { Dia } from '../interfaces/dias.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosRegistradosService {

  public cursos: Curso[] = [

    {
      NRC: '40090',
      nombre: 'Desarrollo de Plataformas Moviles',
      codigo: 'EIF411',
      dias: [
        Dia.Lunes,
        Dia.Martes
      ],
      hora_entrada: [
        new Date("2023-02-05T19:00:00.540Z"),
        new Date("2023-02-05T19:00:00.678Z")
      ],
      hora_salida: [
        new Date("2023-02-05T20:20:00.500Z"),
        new Date("2023-02-05T20:20:00.462Z")
      ],
      profesor: {nombre:'Carlos Loria'}
    },
    {
      NRC: '40090',
      nombre: 'Desarrollo de Plataformas Moviles',
      codigo: 'EIF411',
      dias: [
        Dia.Lunes,
        Dia.Martes,
        Dia.Miercoles
      ],
      hora_entrada: [
        new Date("2023-02-05T19:00:00.540Z"),
        new Date("2023-02-05T19:00:00.678Z"),
        new Date("2023-02-05T19:00:00.678Z")
      ],
      hora_salida: [
        new Date("2023-02-05T20:20:00.500Z"),
        new Date("2023-02-05T19:00:00.678Z"),
        new Date("2023-02-05T20:20:00.462Z")
      ],
      profesor: {nombre:'Carlos Loria'}
    },

  ]

  constructor() { }

  get getCursos(){
    return [...this.cursos];
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
  }

  eliminarCurso(NRC: string){
    this.cursos.forEach((curso,index)=>{
      if(curso.NRC == NRC){
        this.cursos.splice(index,1);
      }
    })
  }
}
