import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  constructor(private http: HttpClient) {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${env.apiURL}/alumnos`);
  }

  editarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${env.apiURL}/alumnos/${alumno.id}`, alumno);
  }

  eliminarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.delete<Alumno>(`${env.apiURL}/alumnos/${alumno.id}`);
  }

  agregarAlumno(newAlumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(`${env.apiURL}/alumnos`, newAlumno);
  }
}
