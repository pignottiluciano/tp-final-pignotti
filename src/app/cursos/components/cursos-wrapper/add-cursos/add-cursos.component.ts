import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CursosService } from 'src/app/cursos/service/cursos.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.scss']
})
export class AddCursosComponent {
  formularioAgregar: FormGroup;
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  suscription: any;

  constructor(
    private cursosService: CursosService,
    public dialogRef: MatDialogRef<AddCursosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formularioAgregar = new FormGroup({
      nombre: new FormControl(data.nombre),
      comision: new FormControl(data.comision),
      profesor: new FormControl(data.profesor),
      fechaInicio: new FormControl(data.fechaInicio),
      FechaFin: new FormControl(data.FechaFin),
      inscripcionAbierta: new FormControl(data.inscripcionAbierta)
    });
  }
  async ngOnInit(): Promise<void> {
    this.cursos$ = this.cursosService.obtenerCursos();
    this.suscription  = this.cursos$.subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
  }

  add() {
    let id: number = this.cursos.length;
    const newCurso: Curso = {
      id: id + 1,
      nombre: this.formularioAgregar.value.nombre,
      comision: this.formularioAgregar.value.comision,
      profesor: this.formularioAgregar.value.profesor,
      fechaInicio: this.formularioAgregar.value.fechaInicio,
      inscripcionAbierta: this.formularioAgregar.value.inscripcionAbierta,
      FechaFin: this.formularioAgregar.value.FechaFin
    };

    console.log(newCurso);
    this.cursosService.agregarCurso(newCurso).subscribe((curso: Curso) => {
      alert(`${curso.nombre}  se agrego como curso.`);
      this.dialogRef.close(curso);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
