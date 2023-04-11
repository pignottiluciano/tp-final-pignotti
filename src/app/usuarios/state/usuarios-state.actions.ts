import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const loadUsers = createAction (
  '[usuarios] Load usuarios'
)

export const usersLoaded = createAction (
  '[usuarios] usuarios loaded',
  props<{usuarios : Usuario[]}>()
)

export const AddUsuario = createAction (
  '[usuarios] Usuario Added',
  props<{usuario : Usuario}>()
)

export const EditarUsuario = createAction (
  '[usuarios] Usuario Edited',
  props<{usuario : Usuario}>()
)

export const EliminarUsuario = createAction (
  '[usuarios] Usuario Deleted',
  props<{usuario : Usuario}>()
)

