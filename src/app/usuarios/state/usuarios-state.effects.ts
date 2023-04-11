import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { AddUsuario, EditarUsuario, EliminarUsuario, loadUsers, usersLoaded } from "./usuarios-state.actions";
import { UsuariosService } from "../service/usuarios.service";
import { Usuario } from "src/app/models/usuario";

@Injectable()
export class UsersEffects{
    getUsers$ = createEffect(() => {
        return this.actions$.pipe( 
            ofType(loadUsers),
            concatMap(() => {
                return this.usuario.obtenerUsuarios().pipe(
                    map((u : Usuario[]) => usersLoaded({ usuarios: u }))
                )
            })
        )
    });
    addUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AddUsuario),
            concatMap(({ usuario }) => {
                return this.usuario.agregarUsuario(usuario).pipe(
                    map((usuario : Usuario) => {
                        this.snackBar.open(`Usuario/a ${usuario.nombre} ${usuario.apellido} agregado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadUsers();
                    })
                )
            })
        );
    });
    deleteUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EliminarUsuario),
            concatMap(({ usuario }) => {
                return this.usuario.eliminarUsuario(usuario).pipe(
                    map((user: Usuario) => {
                        this.snackBar.open(`Usuario/a ${usuario.nombre} ${usuario.apellido} eliminado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadUsers();
                    })
                )
            })
        )
    });
    
    editUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EditarUsuario),
            concatMap(({ usuario }) => {
                return this.usuario.editarUsuario(usuario).pipe(
                    map((usuario: Usuario) => {
                        this.snackBar.open(`Usuario/a ${usuario.nombre} ${usuario.apellido} editado/a correctamente`, 'Cerrar', {
                            duration : 3000
                        });
                        return loadUsers();
                    })
                )
            })
        );
    });

    constructor(
        private usuario: UsuariosService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}