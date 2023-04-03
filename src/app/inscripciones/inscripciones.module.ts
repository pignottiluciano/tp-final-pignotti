import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesWrapperComponent } from './components/inscripciones-wrapper/inscripciones-wrapper.component';
import { InscripcionesRountingModule } from './inscripciones-rounting.module';
import { AddInscripcionComponent } from './components/inscripciones-wrapper/add-inscripcion/add-inscripcion.component';
import { DeleteInscripcionComponent } from './components/inscripciones-wrapper/delete-inscripcion/delete-inscripcion.component';
import { ListaInscripcionesComponent } from './components/inscripciones-wrapper/lista-inscripciones/lista-inscripciones.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InscripcionesWrapperComponent,
    AddInscripcionComponent,
    DeleteInscripcionComponent,
    ListaInscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRountingModule, SharedModule
  ]
})
export class InscripcionesModule { }
