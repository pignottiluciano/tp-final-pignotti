import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosWrapperComponent } from './components/alumnos-wrapper/alumnos-wrapper.component';
import { SesionGuard } from '../core/guards/sesion.guard';

const routes: Routes = [
  {path: '', canActivate: [SesionGuard], component: AlumnosWrapperComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule {}
