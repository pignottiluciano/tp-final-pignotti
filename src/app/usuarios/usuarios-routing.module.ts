import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionGuard } from '../core/guards/sesion.guard';
import { UsuariosWrapperComponent } from './components/usuarios-wrapper/usuarios-wrapper.component';

const routes: Routes = [
  { path: '', canActivate: [SesionGuard], component: UsuariosWrapperComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
