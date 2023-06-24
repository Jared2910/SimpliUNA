import { Injectable } from '@angular/core';
import { Profesor } from '../interfaces/profesor.interface';

@Injectable({
  providedIn: 'root'
})
export class DataProvidersService {

  constructor() { }
  
  profesores: Profesor[] = [
    {nombre:'Carlos Loria'},
    {nombre:'Maikol Guzman'},
    {nombre:'Olger Achio'},
    {nombre:'Juan de Dios'},
  ]
  
  NRCs: string[] = [
    '40090',
    '40080',
    '40060',
    '40070',
    '40050',
  ]
  
  codigosDeCursos: string[] = [
    'EIF411',
  ]

  nombreDeCursos: string[] = [
    'Programación IV',
    'Programación III',
    'Ingeniería de Sistemas III',
    'Organización y su entorno',
  ]

}
