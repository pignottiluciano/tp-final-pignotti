import { Profesor } from "./profesor";

export interface Curso{
    id: number;
    nombre: string;
    comision: string;
    profesor: Profesor;
    inscripcionAbierta: boolean;
    fechaInicio: Date;
    FechaFin: Date;
}