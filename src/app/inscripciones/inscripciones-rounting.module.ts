import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SesionGuard } from '../core/guards/sesion.guard';
import { InscripcionesWrapperComponent } from './components/inscripciones-wrapper/inscripciones-wrapper.component';
import { AddInscripcionComponent } from './components/inscripciones-wrapper/add-inscripcion/add-inscripcion.component';
import { ListaInscripcionesComponent } from './components/inscripciones-wrapper/lista-inscripciones/lista-inscripciones.component';

const routes: Routes = [
  { path: '', canActivate: [SesionGuard], component: InscripcionesWrapperComponent,
  children: [
    { path: '', component: ListaInscripcionesComponent },
    { path: 'add', component: AddInscripcionComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscripcionesRountingModule { }
