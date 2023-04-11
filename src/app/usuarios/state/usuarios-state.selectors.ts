import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsersState from './usuarios-state.reducer';
import { UsuariosState } from './usuarios-state.reducer';

export const selectUsersState = createFeatureSelector<fromUsersState.UsuariosState>(
  fromUsersState.usersStateFeatureKey
);


export const loadUsersSelector = createSelector(
  selectUsersState,
  (state : UsuariosState) => {
      return state.loading
  }
)

export const usersLoadedSelector = createSelector(
  selectUsersState,
  (state : UsuariosState) => {
      return state.usuarios
  }
)
