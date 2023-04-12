import { createAction, props } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';

export const cargarAlumnoState = createAction(
  '[AlumnoState] Cargar AlumnoStates'
);

export const AlumnosCargados = createAction(
  '[AlumnoState] Alumnos cargados',
  props<{ alumnos: Alumno[] }>()
);

export const agregarAlumnoState = createAction(
  '[AlumnoState] Agregar Alumno',
  props<{ alumno: Alumno }>()
);

export const editarAlumnoState = createAction(
  '[AlumnooState] Editar Alumno',
  props<{ alumno: Alumno }>()
);

export const eliminarAlumnoState = createAction(
  '[AlumnoState] Eliminar Alumno',
  props<{ alumno: Alumno }>()
);


