import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Profesor } from 'src/app/models/profesor';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  // private cursos: Curso[] = [
  //   {
  //     id: '1',
  //     nombre: 'JavaScript',
  //     comision: '202',
  //     profesor: {
  //       id: '1',
  //       nombre: 'Alfredo',
  //       correo: 'alfredo@coder.com',
  //     },
  //     inscripcionAbierta: false,
  //     fechaInicio: new Date(26 - 3 - 2023),
  //     FechaFin: new Date(26 - 5 - 2023),
  //   },
  //   {
  //     id: '2',
  //     nombre: 'Angular',
  //     comision: '203',
  //     profesor: {
  //       id: '2',
  //       nombre: 'Lautaro',
  //       correo: 'lautaro@coder.com',
  //     },
  //     inscripcionAbierta: false,
  //     fechaInicio: new Date(26 - 3 - 2023),
  //     FechaFin: new Date(26 - 5 - 2023),
  //   },
  //   {
  //     id: '3',
  //     nombre: 'Desarrollo Web',
  //     comision: '205',
  //     profesor: {
  //       id: '3',
  //       nombre: 'Alberto',
  //       correo: 'alberto@coder.com'
  //     },
  //     inscripcionAbierta: false,
  //     fechaInicio: new Date(26 - 3 - 2023),
  //     FechaFin: new Date(26 - 5 - 2023),
  //   },
  //   {
  //     id: '4',
  //     nombre: 'React',
  //     comision: '206',
  //     profesor: {
  //       id: '4',
  //       nombre: 'Luciano',
  //       correo: 'luciano@coder.com',
  //     },
  //     inscripcionAbierta: false,
  //     fechaInicio: new Date(26 - 3 - 2023),
  //     FechaFin: new Date(26 - 5 - 2023),
  //   }
  // ];
  // private api: string = 'https://640a76f565d3a01f98ff8be7.mockapi.io/'

  // private cursos$: BehaviorSubject<Curso[]>;

  constructor(private http: HttpClient) {
    // this.cursos$ = new BehaviorSubject<Curso[]>(this.cursos);
  }

  async obtenerCursos(): Promise<Observable<Curso[]>> {
    return this.http.get<Curso[]>(`${env.apiURL}/cursos`);
  }

  eliminarCursos(index: number) {}
  agregarCurso(newCurso: Curso) {}
}
