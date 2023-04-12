import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Alumno } from "src/app/models/alumno";
import { AlumnosService } from "../service/alumnos.service";
import { agregarAlumnoState, AlumnosCargados, cargarAlumnoState, editarAlumnoState, eliminarAlumnoState } from "./alumno-state.actions";

@Injectable()
export class AlumnosEffects{
    cargarAlumnos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(cargarAlumnoState),
            concatMap(() => {
                return this.alumnos.obtenerAlumnos().pipe(
                    map((a: Alumno[]) => AlumnosCargados({ alumnos: a }))
                )
            })
        )
    });
    agregarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(agregarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnos.agregarAlumno(alumno).pipe(
                    map((curso: Alumno) => {
                        this.snackBar.open(`${curso.nombre} agregado satisfactoriamente`);
                        this.router.navigate(['cursos/listar']);
                        return cargarAlumnoState();
                    })
                )
            })
        );
    });
    elimninarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(eliminarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnos.eliminarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        return cargarAlumnoState();
                    })
                )
            })
        )
    });
    
    editarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnos.editarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        return cargarAlumnoState();
                    })
                )
            })
        );
    });

    constructor(
        private alumnos: AlumnosService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}