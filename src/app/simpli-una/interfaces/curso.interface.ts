
import { Profesor } from "./profesor.interface";

export interface Curso {
    NRC: string;
    nombre: string;
    codigo: string;
    dias: string[];
    horasDeEntrada: Date[];
    horasDeSalida: Date[];
    profesor: Profesor;
}