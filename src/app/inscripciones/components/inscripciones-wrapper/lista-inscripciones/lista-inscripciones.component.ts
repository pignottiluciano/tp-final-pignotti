import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/alumnos/service/alumnos.service';
import { SesionService } from 'src/app/core/service/sesion.service';
import { InscripcionesService } from 'src/app/inscripciones/service/inscripciones.service';
import { Inscripciones } from 'src/app/models/inscripciones';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.scss']
})
export class ListaInscripcionesComponent {
  inscripciones!: Inscripciones[];

  dataSource!: MatTableDataSource<Inscripciones>;
  columnas: string[] = ['id', 'curso', 'alumno', 'fecha', 'eliminar'];
  suscription: any;
  sesion$!: Observable<Sesion>;
  inscripciones$!: Observable<Inscripciones[]>;

  constructor(
    private alumnoService: AlumnosService,
    private inscripcionService: InscripcionesService,
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
    this.inscripciones$ = this.inscripcionService.obtenerInscripciones();
    this.suscription  = this.inscripciones$.subscribe((inscripcion: Inscripciones[]) => {
      this.inscripciones = inscripcion;
      this.dataSource = new MatTableDataSource<Inscripciones>(this.inscripciones);
    });
  }


  AgregarAlumno() {
    // const dialogRef = this.dialog.open(AddAlumnosComponent, {});
    // dialogRef.afterClosed().subscribe((alumno: Alumno) => {
    //   this.actualizarLista();
    //   alert(`${alumno.nombre} ${alumno.apellido} se agrego satifactoriamente`);
    // });
  }

  eliminarInscripcion(inscripcion: Inscripciones) {
    if (confirm('Quiere Eliminar esta inscripcion?') && this.inscripciones) {
      this.inscripcionService
        .eliminarInscripciones(inscripcion)
        .subscribe((inscripcion: Inscripciones) => {

          this.actualizarLista();
        });
    }
  }
}
