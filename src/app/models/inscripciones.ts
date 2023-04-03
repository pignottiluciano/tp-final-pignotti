import { Alumno } from './alumno';
import { Curso } from './curso';

export interface Inscripciones {
  id: number;
  alumno: Alumno;
  fecha: Date;
  curso: Curso;
}
