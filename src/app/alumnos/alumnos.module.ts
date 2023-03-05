import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AlumnosWrapperComponent } from './components/alumnos-wrapper/alumnos-wrapper.component';
import { AddAlumnosComponent } from './components/alumnos-wrapper/add-alumnos/add-alumnos.component';
import { EditAlumnoComponent } from './components/alumnos-wrapper/edit-alumno/edit-alumno.component';
import { ListaAlumnosComponent } from './components/alumnos-wrapper/lista-alumnos/lista-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosRoutingModule } from './alumnos-routing.module';

@NgModule({
  declarations: [
    AlumnosWrapperComponent,
    AddAlumnosComponent,
    EditAlumnoComponent,
    ListaAlumnosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
