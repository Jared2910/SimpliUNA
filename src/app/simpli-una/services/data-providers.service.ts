import { Injectable } from '@angular/core';
import { Dia } from '../interfaces/dias.interface';
import { Profesor } from '../interfaces/profesor.interface';

@Injectable({
  providedIn: 'root'
})
export class DataProvidersService {

  constructor() { }

  dias: Dia[] = [
    {nombre:'Lunes', codigo: 1},
    {nombre:'Martes', codigo: 2},
    {nombre:'Miercoles', codigo: 3},
    {nombre:'Jueves', codigo: 4},
    {nombre:'Viernes', codigo: 5},
    {nombre:'Sabado', codigo: 6},
    {nombre:'Domingo', codigo: 7},
  ]
  
  profesores: Profesor[] = [
    {nombre:'Carlos Loria'},
    {nombre:'Maikol Guzman'},
    {nombre:'Olger Achio'},
    {nombre:'Juan de Dios'},
  ]



}
