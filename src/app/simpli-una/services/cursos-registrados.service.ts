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
    }

  ]

  constructor() { }
}

/*
    NRC: NRC;
    nombre: String;
    codigo: string;
    dias: Dia[];
    hora_entrada: Date[];
    hora_salida: Date[];
    profesor: Profesor;

*/
