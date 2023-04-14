import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursosService } from 'src/app/cursos/service/cursos.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.scss'],
})
export class EditCursoComponent implements OnInit {
  formularioEditar: FormGroup;

  constructor(
    private cursosService: CursosService,
    public dialogRef: MatDialogRef<EditCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) {
    this.formularioEditar = new FormGroup({
      nombre: new FormControl(data.nombre),
      comision: new FormControl(data.comision),
      profesor: new FormControl(data.profesor),
      fechaInicio: new FormControl(data.fechaInicio),
      FechaFin: new FormControl(data.FechaFin),
      inscripcionAbierta: new FormControl(data.inscripcionAbierta)
    });
  }
  ngOnInit(): void {
  }

  edit() {
    let curso: Curso = {
      id: this.data.id,
      nombre: this.formularioEditar.value.nombre,
      comision: this.formularioEditar.value.comision,
      profesor: this.formularioEditar.value.profesor,
      fechaInicio: this.formularioEditar.value.fechaInicio,
      inscripcionAbierta: this.formularioEditar.value.inscripcionAbierta,
      FechaFin: this.formularioEditar.value.FechaFin,
    };
    this.cursosService.editarCurso(curso).subscribe((curso: Curso) => {
      this.dialogRef.close(curso);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
