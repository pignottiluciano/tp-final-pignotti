import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/service/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/usuarios/service/usuarios.service';
import { EliminarUsuario, usersLoaded } from 'src/app/usuarios/state/usuarios-state.actions';
import { UsuariosState } from 'src/app/usuarios/state/usuarios-state.reducer';
import { usersLoadedSelector } from 'src/app/usuarios/state/usuarios-state.selectors';
import { AddUsuarioComponent } from '../add-usuario/add-usuario.component';
import { EditUsuarioComponent } from '../edit-usuario/edit-usuario.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
})
export class ListaUsuariosComponent {
  usuarios!: Usuario[];

  dataSource!: MatTableDataSource<Usuario>;
  columnas: string[] = ['nombreYApellido', 'usuario', 'editarEliminar'];
  suscription: any;
  sesion$!: Observable<Sesion>;
  usuarios$!: Observable<Usuario[]>;

  constructor(
    private usuariosService: UsuariosService,
    private dialog: MatDialog,
    private sesionService: SesionService,
    private router: Router,
    private store: Store<UsuariosState>
  ) {}
  async ngOnInit(): Promise<void> {
    this.dataSource = new MatTableDataSource<Usuario>();
    this.sesion$ = this.sesionService.obtenerSesion();
    this.usuarios$ = this.store.select(usersLoadedSelector);
    this.actualizarLista();
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  actualizarLista() {
    this.usuarios$ = this.usuariosService.obtenerUsuarios();
    this.suscription  = this.usuarios$.subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      this.dataSource.data = usuarios;
    });
  }

  modalEdit(usuario: Usuario) {
    const dialogRef = this.dialog
      .open(EditUsuarioComponent, { data: usuario })
      .beforeClosed()
      .subscribe(() => {
        this.actualizarLista();
      });
  }

  AgregarUsuario() {
    const dialogRef = this.dialog
      .open(AddUsuarioComponent)
      .beforeClosed()
      .subscribe(() => {
        this.actualizarLista();
      });
  }

  eliminarUsuario(usuario: Usuario) {
    if (confirm('Quiere Eliminar este alumno?') && this.usuarios) {
      this.store.dispatch(EliminarUsuario({ usuario: usuario }));
      this.actualizarLista();
    }
  }
}
