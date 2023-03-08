import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWrapperComponent } from './core/components/home-wrapper/home-wrapper.component';
import { ProfesoresWrapperComponent } from './core/components/profesores-wrapper/profesores-wrapper.component';

const routes: Routes = [
  {path: 'inicio', component: HomeWrapperComponent},
  {path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then((modulo) => modulo.AlumnosModule)},
  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule)},
  {path: 'auth', loadChildren: () => import('./autenticacion/autenticacion.module').then((modulo) => modulo.AutenticacionModule)},
  {path: 'profesores', component: ProfesoresWrapperComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: HomeWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
