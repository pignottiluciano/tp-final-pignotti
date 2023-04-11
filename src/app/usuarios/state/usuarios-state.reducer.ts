import { createFeature, createReducer, on } from '@ngrx/store';
import * as UsersStateActions from './usuarios-state.actions';
import { Usuario } from "src/app/models/usuario";

export const usersStateFeatureKey = 'usuarioState';

export interface UsuariosState {
    loading : boolean,
    usuarios : Usuario[]
}

export const initialState: UsuariosState = {
  loading : false,
  usuarios : []
};

export const reducer = createReducer(
  initialState,
  on(UsersStateActions.loadUsers, (state) => {
    const newState : UsuariosState ={
        loading : true,
        usuarios : state.usuarios
    }
    return newState
}),
on(UsersStateActions.usersLoaded, (state, {usuarios}) => {
    const newState : UsuariosState ={
        loading : false,
        usuarios : usuarios
    }
    return newState
}),
on(UsersStateActions.AddUsuario, (state, { usuario: Usuario }) => {
  return state;
}),
on(UsersStateActions.EditarUsuario, (state, { usuario: Usuario }) => {
  return state;
}),
on(UsersStateActions.EliminarUsuario, (state, { usuario: Usuario }) => {
  return state;
})
);

export const usersStateFeature = createFeature({
  name: usersStateFeatureKey,
  reducer,
});

