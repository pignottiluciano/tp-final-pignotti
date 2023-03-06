import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosWrapperComponent } from './components/cursos-wrapper/cursos-wrapper.component';
import { AddCursosComponent } from './components/cursos-wrapper/add-cursos/add-cursos.component';
import { ListaCursosComponent } from './components/cursos-wrapper/lista-cursos/lista-cursos.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosRoutingModule } from './cursos-routing.module';
import { EditCursoComponent } from './components/cursos-wrapper/edit-curso/edit-curso.component';



@NgModule({
  declarations: [
    CursosWrapperComponent,
    AddCursosComponent,
    ListaCursosComponent,
    EditCursoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
