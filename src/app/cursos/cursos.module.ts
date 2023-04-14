import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosWrapperComponent } from './components/cursos-wrapper/cursos-wrapper.component';
import { AddCursosComponent } from './components/cursos-wrapper/add-cursos/add-cursos.component';
import { ListaCursosComponent } from './components/cursos-wrapper/lista-cursos/lista-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { EditCursoComponent } from './components/cursos-wrapper/edit-curso/edit-curso.component';
import { SharedModule } from '../shared/shared.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    CursosWrapperComponent,
    AddCursosComponent,
    ListaCursosComponent,
    EditCursoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ]
})
export class CursosModule { }
