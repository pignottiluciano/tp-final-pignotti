import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/service/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/usuarios/service/usuarios.service';
import { AddUsuarioComponent } from '../add-usuario/add-usuario.component';
import { EditUsuarioComponent } from '../edit-usuario/edit-usuario.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
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
    private router: Router
  ) {}
  async ngOnInit(): Promise<void> {
    this.sesion$ = this.sesionService.obtenerSesion();
    this.actualizarLista();
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  actualizarLista() {
    this.usuarios$ = this.usuariosService.obtenerUsuarios();
    this.suscription  = this.usuarios$.subscribe((alumno: Usuario[]) => {
      this.usuarios = alumno;
      this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
    });
  }

  modalEdit(usuario: Usuario) {
    const dialogRef = this.dialog.open(EditUsuarioComponent, { data: usuario });
    dialogRef.afterClosed().subscribe((usuario: Usuario) => {
      this.actualizarLista();
      alert(`${usuario.nombre} ${usuario.apellido} editado satifactoriamente`);
    });
  }

  AgregarUsuario() {
    const dialogRef = this.dialog.open(AddUsuarioComponent, {});
    dialogRef.afterClosed().subscribe((usuario: Usuario) => {
      this.actualizarLista();
      alert(`${usuario.nombre} ${usuario.apellido} se agrego satifactoriamente`);
    });
  }

  eliminarUsuario(alumno: Usuario) {
    if (confirm('Quiere Eliminar este alumno?') && this.usuarios) {
      this.usuariosService
        .eliminarUsuario(alumno)
        .subscribe((usuario: Usuario) => {

          this.actualizarLista();
        });
    }
  }
}