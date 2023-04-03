import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlumnosService } from 'src/app/alumnos/service/alumnos.service';
import { CursosService } from 'src/app/cursos/service/cursos.service';
import { InscripcionesService } from 'src/app/inscripciones/service/inscripciones.service';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { Inscripciones } from 'src/app/models/inscripciones';

@Component({
  selector: 'app-add-inscripcion',
  templateUrl: './add-inscripcion.component.html',
  styleUrls: ['./add-inscripcion.component.scss'],
})
export class AddInscripcionComponent {
  formularioInscripcion!: FormGroup;

  alumno!: Alumno;
  alumnos!: Alumno[];
  alumnoSubscription!: Subscription;
  alumno$!: Observable<Alumno[]>;

  curso$!: Observable<Curso[]>;
  cursosSubscription!: Subscription;
  cursos!: Curso[];

  constructor(
    private router: Router,
    private cursoService: CursosService,
    private alumnoService: AlumnosService,
    private inscripciones: InscripcionesService
  ) {}

  getAlumnosList() {
    this.alumno$ = this.alumnoService.obtenerAlumnos();
    this.alumnoSubscription = this.alumno$.subscribe(
      (alumnos: Alumno[]) => (this.alumnos = alumnos)
    );
  }

  getCursosList() {
    this.curso$ = this.cursoService.obtenerCursos();
    this.cursosSubscription = this.curso$.subscribe(
      (curso: Curso[]) => (this.cursos = curso)
    );
  }

  ngOnInit(): void {
    this.getAlumnosList();
    this.getCursosList();
    this.formularioInscripcion = new FormGroup({
      alumno: new FormGroup({
        id:new FormControl('', [Validators.required]),
        nombre:new FormControl('', [Validators.required]),
        apellido:new FormControl('',[Validators.required])
      }),
      fecha: new FormControl('', [Validators.required]),
      curso: new FormGroup({
        id:new FormControl('', [Validators.required]),
        curso:new FormControl('', [Validators.required])
      }),
    });
  }

  addInscripcion() {
    let id: number = this.cursos.length;

    let inscripcion: Inscripciones = {
      id: id + 1,
      alumno: this.formularioInscripcion.value.alumno,
      fecha: this.formularioInscripcion.value.fecha,
      curso: this.formularioInscripcion.value.curso,
    };
    
    this.inscripciones
      .agregarInscripciones(inscripcion)
      .subscribe(() => this.router.navigate(['/inscripciones']));
      
  }
  onNoClick(): void {
    this.router.navigate(['/inscripciones'])
  }
}
