import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/alumnos/service/alumnos.service';
import { SesionService } from 'src/app/core/service/sesion.service';
import { Alumno } from 'src/app/models/alumno';
import { Sesion } from 'src/app/models/sesion';
import { AddAlumnosComponent } from '../add-alumnos/add-alumnos.component';
import { EditAlumnoComponent } from '../edit-alumno/edit-alumno.component';
import { AuthState } from 'src/app/autenticacion/components/state/auth.reducer';
import { Store } from '@ngrx/store';
import { selectUsuarioAdmin } from 'src/app/autenticacion/components/state/auth.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlumnoState } from 'src/app/alumnos/state/alumno-state.reducer';
import { selectAlumnosCargados } from 'src/app/alumnos/state/alumno-state.selectors';
import { eliminarAlumnoState } from 'src/app/alumnos/state/alumno-state.actions';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {
  alumnos!: Alumno[];
  usuarioAdmin$!: any;

  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = ['nombreYApellido', 'edad', 'estado', 'editarEliminar'];
  suscription: any;
  sesion$!: Observable<Sesion>;
  alumnos$!: Observable<Alumno[]>;

  constructor(
    private alumnoService: AlumnosService,
    private dialog: MatDialog,
    private sesionService: SesionService,
    private router: Router,
    private authStore: Store<AuthState>,
    private store: Store<AlumnoState>,
    private snackBar: MatSnackBar,
  ) {}
  async ngOnInit(): Promise<void> {
    this.dataSource = new MatTableDataSource<Alumno>();
    this.usuarioAdmin$ = this.authStore.select(selectUsuarioAdmin);
    this.alumnos$ =  this.store.select(selectAlumnosCargados);
    this.actualizarLista();
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  cambioEstado(id: any) {
    if (this.alumnos) {
      this.alumnos.forEach((alumno) => {
        if (id == alumno.id) {
          alumno.estado = !alumno.estado;
        }
      });
    }
  }

  actualizarLista() {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
    this.suscription  = this.alumnos$.subscribe((alumno: Alumno[]) => {
      this.alumnos = alumno;
      console.log(alumno)
      this.dataSource.data = alumno;
    });
  }

  modalEdit(alumno: Alumno) {
    const dialogRef = this.dialog.open(EditAlumnoComponent, { data: alumno });
    dialogRef.afterClosed().subscribe((alumno: Alumno) => {
      this.snackBar.open(`${alumno.nombre} ${alumno.apellido} editado satifactoriamente`);
      this.actualizarLista();
    });
  }

  AgregarAlumno() {
    const dialogRef = this.dialog.open(AddAlumnosComponent, {});
    dialogRef.afterClosed().subscribe((alumno: Alumno) => {
      this.snackBar.open(`${alumno.nombre} ${alumno.apellido} se agrego satifactoriamente`);
      this.actualizarLista();
    });
  }

  eliminarUsuario(alumno: Alumno) {
    if (confirm('Quiere Eliminar este alumno?') && this.alumnos) {
      this.snackBar.open(`${alumno.nombre} eliminado satisfactoriamente`);
      this.store.dispatch(eliminarAlumnoState({ alumno }));
    }
  }
}
