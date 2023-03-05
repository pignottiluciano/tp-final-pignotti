import { Curso } from "./curso";

export interface Alumno{
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    cursoInscripto?: Curso;
    estado: boolean;
}