import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';
import { Dia } from '../interfaces/dias.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosRegistradosService {

  public cursos: Curso[] = [

    {
      NRC: '50079',
      nombre: 'Programación I',
      codigo: 'EIF201',
      dias: [
        Dia.Lunes,
        Dia.Jueves
      ],
      horasDeEntrada: [
        new Date("2023-08-26T14:00:00.000Z"),
        new Date("2023-08-26T14:00:00.000Z")
      ],
      horasDeSalida: [
        new Date("2023-08-26T15:40:00.000Z"),
        new Date("2023-08-26T15:40:00.000Z")
      ],
      profesor: {nombre:'Santiago Camaño'}
    },
    {
      NRC: '50084',
      nombre: 'Programación I',
      codigo: 'EIF201',
      dias: [
        Dia.Lunes,
        Dia.Jueves
      ],
      horasDeEntrada: [
        new Date("2023-08-26T16:00:00.000Z"),
        new Date("2023-08-26T16:00:00.000Z")
      ],
      horasDeSalida: [
        new Date("2023-08-26T17:40:00.000Z"),
        new Date("2023-08-26T17:40:00.000Z")
      ],
      profesor: {nombre:'Santiago Camaño'}
    },
    {
      NRC: '50085',
      nombre: 'Programación I',
      codigo: 'EIF201',
      dias: [
        Dia.Lunes,
        Dia.Jueves
      ],
      horasDeEntrada: [
        new Date("2023-08-26T19:00:00.000Z"),
        new Date("2023-08-26T19:00:00.000Z")
      ],
      horasDeSalida: [
        new Date("2023-08-26T20:40:00.000Z"),
        new Date("2023-08-26T20:40:00.000Z")
      ],
      profesor: {nombre:'Santiago Camaño'}
    },
    {
      NRC: '50221',
      nombre: 'Estructuras De Datos',
      codigo: 'EIF207',
      dias: [
        Dia.Martes,
        Dia.Viernes
      ],
      horasDeEntrada: [
        new Date("2023-08-26T16:00:00.000Z"),
        new Date("2023-08-26T16:00:00.000Z")
      ],
      horasDeSalida: [
        new Date("2023-08-26T17:40:00.000Z"),
        new Date("2023-08-26T17:40:00.000Z")
      ],
      profesor: {nombre:'Georges Alfaro'}
    },
    {
      NRC: '50222',
      nombre: 'Estructuras De Datos',
      codigo: 'EIF207',
      dias: [
        Dia.Martes,
        Dia.Viernes
      ],
      horasDeEntrada: [
        new Date("2023-08-26T19:00:00.000Z"),
        new Date("2023-08-26T19:00:00.000Z")
      ],
      horasDeSalida: [
        new Date("2023-08-26T20:40:00.000Z"),
        new Date("2023-08-26T20:40:00.000Z")
      ],
      profesor: {nombre:'Georges Alfaro'}
    },
    {
      NRC: '50138',
      nombre: 'Arquitectura De Computadoraes',
      codigo: 'EIF205',
      dias: [
        Dia.Martes,
        Dia.Viernes
      ],
      horasDeEntrada: [
        new Date("2023-08-27T00:00:00.000Z"),
        new Date("2023-08-27T00:00:00.000Z")
      ],
      horasDeSalida: [
        new Date("2023-08-27T01:40:00.000Z"),
        new Date("2023-08-27T01:40:00.000Z")
      ],
      profesor: {nombre:'Cesar Valverde'}
    },
    {
      NRC: '50140',
      nombre: 'Arquitectura De Computadoraes',
      codigo: 'EIF205',
      dias: [
        Dia.Martes,
        Dia.Viernes
      ],
      horasDeEntrada: [
        new Date("2023-08-27T00:00:00.000Z"),
        new Date("2023-08-27T00:00:00.000Z")
      ],
      horasDeSalida: [
        new Date("2023-08-27T01:40:00.000Z"),
        new Date("2023-08-27T01:40:00.000Z")
      ],
      profesor: {nombre:'Henry Guevara'}
    },

  ]

  constructor() {

    console.log(this.getCursos)

  }

  get getCursos(){
    return [...this.cursos];
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    console.log(this.cursos)
  }

  eliminarCurso(NRC: string){
    this.cursos.forEach((curso,index)=>{
      if(curso.NRC == NRC){
        this.cursos.splice(index,1);
      }
    })
  }
}
