import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from '../core/guards/sesion.guard';
import { CursosWrapperComponent } from './components/cursos-wrapper/cursos-wrapper.component';

const routes: Routes = [
  {path: '', component: CursosWrapperComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
