import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/alumnos/service/alumnos.service';
import { SesionService } from 'src/app/core/service/sesion.service';
import { Alumno } from 'src/app/models/alumno';
import { Sesion } from 'src/app/models/sesion';
import { AddAlumnosComponent } from '../add-alumnos/add-alumnos.component';
import { EditAlumnoComponent } from '../edit-alumno/edit-alumno.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy{
  alumnos!: Alumno[];

  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = ['nombreYApellido', 'edad', 'estado', 'editarEliminar'];
  suscription: any;
  sesion$!: Observable<Sesion>


  constructor(
    private alumnoService: AlumnosService,
    private dialog: MatDialog,
    private sesionService: SesionService
  ) {}
  async ngOnInit(): Promise<void> {
    this.suscription = this.alumnoService.obtenerAlumnos().subscribe((alumnos: Alumno[]) => {
      this.alumnos = alumnos;
    });
    this.sesion$ = this.sesionService.obtenerSesion();
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
    this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
  }

  modalEdit(alumno: Alumno) {
    const dialogRef = this.dialog.open(EditAlumnoComponent, { data: alumno });
  }

  AgregarAlumno() {
    const dialogRef = this.dialog.open(AddAlumnosComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      this.actualizarLista();
    });
  }

  eliminarUsuario(index: number, id: any) {
    if (confirm('Quiere Eliminar este alumno?') && this.alumnos) {
      this.alumnos = this.alumnoService.eliminarAlumnos(index);
      this.actualizarLista();
    }
  }
}
