import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';
import { CursosRegistradosService } from './cursos-registrados.service';

@Injectable({
  providedIn: 'root'
})
export class HorariosGeneradosService {

  horariosGenerados: Curso[][] = [];

  constructor(private CursosRegistradosService: CursosRegistradosService) { }
}
