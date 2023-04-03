import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { envInscripcion } from 'src/environment/environment.inscripcion';

@Injectable({
  providedIn: 'root',
})
export class CursosService {

  constructor(private http: HttpClient) {
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${envInscripcion.apiURL}/cursos`);
  }

  editarCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${envInscripcion.apiURL}/cursos/${curso.id}`, curso);
  }

  eliminarCurso(curso: Curso): Observable<Curso> {
    return this.http.delete<Curso>(`${envInscripcion.apiURL}/cursos/${curso.id}`);
  }

  agregarCurso(newCurso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${envInscripcion.apiURL}/cursos`, newCurso);
  }

  // eliminarCursos(index: number) {}
  // agregarCurso(newCurso: Curso) {}
}
