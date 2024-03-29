import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWrapperComponent } from './core/components/home-wrapper/home-wrapper.component';
import { PageNoEncontradoComponent } from './core/components/page-no-encontrado/page-no-encontrado.component';
import { ProfesoresWrapperComponent } from './core/components/profesores-wrapper/profesores-wrapper.component';
import { AdminGuard } from './core/guards/admin.guard';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [
  {
    path: 'inicio',
    canActivate: [SesionGuard],
    component: HomeWrapperComponent,
  },
  {
    path: 'alumnos',
    canActivate: [SesionGuard],
    loadChildren: () =>
      import('./alumnos/alumnos.module').then((modulo) => modulo.AlumnosModule),
  },
  {
    path: 'usuarios',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./usuarios/usuarios.module').then(
        (modulo) => modulo.UsuariosModule
      ),
  },
  {
    path: 'cursos',
    canActivate: [SesionGuard],
    loadChildren: () =>
      import('./cursos/cursos.module').then((modulo) => modulo.CursosModule),
  },
  {
    path: 'inscripciones',
    canActivate: [SesionGuard],
    loadChildren: () =>
      import('./inscripciones/inscripciones.module').then(
        (modulo) => modulo.InscripcionesModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./autenticacion/autenticacion.module').then(
        (modulo) => modulo.AutenticacionModule
      ),
  },
  {
    path: 'profesores',
    canActivate: [SesionGuard],
    component: ProfesoresWrapperComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  { path: '**', component: PageNoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
