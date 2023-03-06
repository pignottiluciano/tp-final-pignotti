import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Franco', apellido: 'Azari', edad: 28, estado: true },
    { id: 2, nombre: 'Agustin', apellido: 'Biblieri', edad: 27, estado: false },
    { id: 3, nombre: 'Juliana', apellido: 'Desca', edad: 28, estado: true },
    { id: 4, nombre: 'Luciano', apellido: 'Pignotti', edad: 24, estado: true },
    { id: 5, nombre: 'Agustiina', apellido: 'Diaz', edad: 23, estado: false },
    {
      id: 6,
      nombre: 'Federico',
      apellido: 'Azcuenaga',
      edad: 21,
      estado: true,
    },
    {
      id: 7,
      nombre: 'Constanza',
      apellido: 'Carballo',
      edad: 28,
      estado: true,
    },
  ];

  private alumnos$: BehaviorSubject<Alumno[]>;

  constructor() {
    this.alumnos$ = new BehaviorSubject<Alumno[]>(this.alumnos);
  }


  obtenerAlumnos(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  eliminarAlumnos(index: number): Array<Alumno> {
    this.alumnos.splice(index, 1);
    return this.alumnos;
  }
  agregarAlumno(newAlumno: Alumno) {
    this.alumnos.push(newAlumno);
    this.alumnos$.next(this.alumnos);
  }
}
