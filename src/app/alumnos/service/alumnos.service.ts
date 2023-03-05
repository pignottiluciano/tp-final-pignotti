import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor() {}

  // obtenerAlumnos(): Array<Alumno> {
  //   return this.alumnos;
  // }
  // obtenerAlumnosPromise(): Promise<Alumno[]> {
  //   return new Promise((resolve, reject) => {
  //     if (this.alumnos.length > 0) {
  //       resolve(this.alumnos);
  //     } else {
  //       reject({ codigo: 0, descripcion: 'arreglo vacio', data: [] });
  //     }
  //   });
  // }
  obtenerAlumnos(): Observable<Alumno[]> {
    return new Observable<Alumno[]>((suscriptor) => {
      suscriptor.next(this.alumnos);
    })
  }

  eliminarAlumnos(index: number): Array<Alumno> {
    this.alumnos.splice(index, 1);
    return this.alumnos;
  }
  agregarAlumno(newAlumno: Alumno) {
    this.alumnos.push(newAlumno);

    console.log('agrego', this.alumnos);
    return this.alumnos;
  }
}
