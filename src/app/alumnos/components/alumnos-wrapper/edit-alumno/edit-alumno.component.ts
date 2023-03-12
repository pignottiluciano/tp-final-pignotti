import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AlumnosService } from 'src/app/alumnos/service/alumnos.service';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.scss'],
})
export class EditAlumnoComponent {
  formularioEditar: FormGroup;

  constructor(
    private alumnosService: AlumnosService,
    public dialogRef: MatDialogRef<EditAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno
  ) {
    this.formularioEditar = new FormGroup({
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      edad: new FormControl(data.edad),
      estado: new FormControl(data.estado),
    });
  }

  edit() {
    let alumno: Alumno = {
      id: this.data.id,
      nombre: this.formularioEditar.value.nombre,
      apellido: this.formularioEditar.value.apellido,
      edad: this.formularioEditar.value.edad,
      estado: this.formularioEditar.value.estado,
    };
    this.alumnosService.editarAlumno(alumno).subscribe((alumno: Alumno) => {
      this.dialogRef.close(alumno);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
