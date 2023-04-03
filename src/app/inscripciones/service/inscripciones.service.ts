import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripciones } from 'src/app/models/inscripciones';
import { envInscripcion } from 'src/environment/environment.inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  constructor(
    private http: HttpClient
  ) { }

  obtenerInscripciones(): Observable<Inscripciones[]>{
    return this.http.get<Inscripciones[]>(`${envInscripcion.apiURL}/inscripciones`)
  }

  agregarInscripciones(inscripciones: Inscripciones):Observable<Inscripciones>{
    return this.http.post<Inscripciones>(`${envInscripcion.apiURL}/inscripciones`,inscripciones)
  }

  eliminarInscripciones(inscripciones:Inscripciones):Observable<Inscripciones>{
    return this.http.delete<Inscripciones>(`${envInscripcion.apiURL}/inscripciones/${inscripciones.id}`);
  }
}
