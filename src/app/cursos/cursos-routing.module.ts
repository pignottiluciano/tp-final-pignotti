import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAlumnoComponent } from '../alumnos/components/alumnos-wrapper/edit-alumno/edit-alumno.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from '../core/guards/sesion.guard';
import { CursosWrapperComponent } from './components/cursos-wrapper/cursos-wrapper.component';
import { EditCursoComponent } from './components/cursos-wrapper/edit-curso/edit-curso.component';

const routes: Routes = [
  {
    path: '',
    component: CursosWrapperComponent,
    children: [{ path: 'edit', component: EditCursoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
