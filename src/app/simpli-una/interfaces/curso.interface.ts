
import { Profesor } from "./profesor.interface";

export interface Curso {
    NRC: string;
    nombre: string;
    codigo: string;
    dias: string[];
    hora_entrada: Date[];
    hora_salida: Date[];
    profesor: Profesor;
}