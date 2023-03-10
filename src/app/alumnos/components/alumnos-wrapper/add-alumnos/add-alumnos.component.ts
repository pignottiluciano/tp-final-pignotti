import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlumnosService } from 'src/app/alumnos/service/alumnos.service';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-add-alumnos',
  templateUrl: './add-alumnos.component.html',
  styleUrls: ['./add-alumnos.component.scss']
})
export class AddAlumnosComponent {
  formularioAgregar: FormGroup;
  alumnos!: Alumno[];

  constructor(
    private alumnosService: AlumnosService,
    public dialogRef: MatDialogRef<AddAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formularioAgregar = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      edad: new FormControl(),
      estado: new FormControl(),
    });
  }
  async ngOnInit(): Promise<void> {
    (await this.alumnosService.obtenerAlumnos()).subscribe((alumnos: Alumno[]) => {
      this.alumnos = alumnos;
    });
  }

  addAlumno() {
    const newAlumno: Alumno = {
      id: this.alumnos.length + 1,
      nombre: this.formularioAgregar.value.nombre,
      apellido: this.formularioAgregar.value.apellido,
      edad: this.formularioAgregar.value.edad,
      estado: this.formularioAgregar.value.estado,
    };
    console.log(newAlumno);
    this.alumnosService.agregarAlumno(newAlumno);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
