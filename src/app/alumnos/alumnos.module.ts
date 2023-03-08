import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosWrapperComponent } from './components/alumnos-wrapper/alumnos-wrapper.component';
import { AddAlumnosComponent } from './components/alumnos-wrapper/add-alumnos/add-alumnos.component';
import { EditAlumnoComponent } from './components/alumnos-wrapper/edit-alumno/edit-alumno.component';
import { ListaAlumnosComponent } from './components/alumnos-wrapper/lista-alumnos/lista-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AlumnosWrapperComponent,
    AddAlumnosComponent,
    EditAlumnoComponent,
    ListaAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
