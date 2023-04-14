import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/autenticacion/components/state/auth.reducer';
import { selectUsuarioAdmin } from 'src/app/autenticacion/components/state/auth.selectors';
import { CursosService } from 'src/app/cursos/service/cursos.service';
import { Curso } from 'src/app/models/curso';
import { AddCursosComponent } from '../add-cursos/add-cursos.component';
import { EditCursoComponent } from '../edit-curso/edit-curso.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss'],
})
export class ListaCursosComponent implements OnInit, OnDestroy {
  cursos!: Curso[];
  data!: any;
  cursos$!: Observable<Curso[]>;
  suscription: any;
  usuarioAdmin$!: any;

  dataSource!: MatTableDataSource<Curso>;
  columnas: string[] = [
    'nombre',
    'profesor',
    'comienzo',
    'fin',
    'editarEliminar',
  ];
  suscripcion: any;

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    private authStore: Store<AuthState>
  ) {}
  async ngOnInit(): Promise<void> {
    this.suscripcion = (await this.cursosService.obtenerCursos()).subscribe(
      async (data: Curso[]) => {
        this.cursos = data;
        this.actualizarLista();
      }
    );
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

  // actualizarLista() {
  //   this.dataSource = new MatTableDataSource<Curso>(this.cursos);
  // }
  actualizarLista() {
    this.cursos$ = this.cursosService.obtenerCursos();
    this.usuarioAdmin$ = this.authStore.select(selectUsuarioAdmin);
    this.suscription = this.cursos$.subscribe((curso: Curso[]) => {
      this.cursos = curso;
      this.dataSource = new MatTableDataSource<Curso>(this.cursos);
    });
  }

  // modalEdit(curso: Curso) {
  //   this.router.navigate(['cursos/edit', { curso }]);
  // }

  modalEdit(curso: Curso) {
    const dialogRef = this.dialog.open(EditCursoComponent, { data: curso });
    dialogRef.afterClosed().subscribe((curso: Curso) => {
      this.actualizarLista();
      this.snackBar.open(`El curso ${curso.nombre} editado satifactoriamente`);
    });
  }

  AgregarCurso() {
    const dialogRef = this.dialog.open(AddCursosComponent, {});

    dialogRef.afterClosed().subscribe((curso: Curso) => {
      this.snackBar.open(
        `El curso ${curso.nombre} se agrego satifactoriamente`
      );
      this.actualizarLista();
    });
  }
  eliminarCurso(curso: Curso) {
    if (confirm('Quiere Eliminar este curso?') && curso) {
      this.cursosService.eliminarCurso(curso).subscribe((curso: Curso) => {
        this.actualizarLista();
      });
    }
  }
}
