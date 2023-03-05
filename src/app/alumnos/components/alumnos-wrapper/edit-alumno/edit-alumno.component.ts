import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.scss']
})
export class EditAlumnoComponent {
  formularioEditar: FormGroup;

  constructor(
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
    this.data.nombre = this.formularioEditar.value.nombre;
    this.data.apellido = this.formularioEditar.value.apellido;
    this.data.edad = this.formularioEditar.value.edad;
    this.data.estado = this.formularioEditar.value.estado;
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
