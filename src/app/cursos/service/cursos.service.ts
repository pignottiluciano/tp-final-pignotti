import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Profesor } from 'src/app/models/profesor';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'JavaScript',
      comision: '202',
      profesor: {
        nombre: 'Alfredo',
        correo: 'alfredo@coder.com',
        fechaRegistro: new Date(26 - 3 - 2019),
      },
      inscripcionAbierta: false,
      fechaInicio: new Date(26 - 3 - 2023),
      FechaFin: new Date(26 - 5 - 2023),
    },
    {
      id: 2,
      nombre: 'Angular',
      comision: '203',
      profesor: {
        nombre: 'Lautaro',
        correo: 'lautaro@coder.com',
        fechaRegistro: new Date(26 - 3 - 2019),
      },
      inscripcionAbierta: false,
      fechaInicio: new Date(26 - 3 - 2023),
      FechaFin: new Date(26 - 5 - 2023),
    },
    {
      id: 3,
      nombre: 'Desarrollo Web',
      comision: '205',
      profesor: {
        nombre: 'Alberto',
        correo: 'alberto@coder.com',
        fechaRegistro: new Date(26 - 3 - 2019),
      },
      inscripcionAbierta: false,
      fechaInicio: new Date(26 - 3 - 2023),
      FechaFin: new Date(26 - 5 - 2023),
    },
    {
      id: 4,
      nombre: 'React',
      comision: '206',
      profesor: {
        nombre: 'Luciano',
        correo: 'luciano@coder.com',
        fechaRegistro: new Date(26 - 3 - 2019),
      },
      inscripcionAbierta: false,
      fechaInicio: new Date(26 - 3 - 2023),
      FechaFin: new Date(26 - 5 - 2023),
    }
  ];

  private cursos$: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursos$ = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }

  eliminarCursos(index: number): Array<Curso> {
    this.cursos.splice(index, 1);
    return this.cursos;
  }
  agregarCurso(newCurso: Curso) {
    this.cursos.push(newCurso);
    this.cursos$.next(this.cursos);
  }
}
