import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/alumnos/service/alumnos.service';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-add-alumnos',
  templateUrl: './add-alumnos.component.html',
  styleUrls: ['./add-alumnos.component.scss'],
})
export class AddAlumnosComponent {
  formularioAgregar: FormGroup;
  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;
  suscription: any;

  constructor(
    private alumnosService: AlumnosService,
    public dialogRef: MatDialogRef<AddAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formularioAgregar = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      estado: new FormControl(),
    });
  }
  async ngOnInit(): Promise<void> {
    this.alumnos$ = this.alumnosService.obtenerAlumnos();
    this.suscription  = this.alumnos$.subscribe((alumnos: Alumno[]) => {
      this.alumnos = alumnos;
    });
  }

  addAlumno() {
    let id: number = this.alumnos.length;
    const newAlumno: Alumno = {
      id: id + 1,
      nombre: this.formularioAgregar.value.nombre,
      apellido: this.formularioAgregar.value.apellido,
      edad: this.formularioAgregar.value.edad,
      estado: this.formularioAgregar.value.estado,
    };
    this.alumnosService.agregarAlumno(newAlumno).subscribe((alumno: Alumno) => {
      this.dialogRef.close(alumno);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
