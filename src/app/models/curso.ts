import { profesor } from "./profesor";

export interface Curso{
    id: number;
    nombre: string;
    comision: string;
    profesor: profesor;
    inscripcionAbierta: boolean;
    fechaInicio: Date;
    FechaFin: Date;
}