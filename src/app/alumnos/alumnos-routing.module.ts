import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosWrapperComponent } from './components/alumnos-wrapper/alumnos-wrapper.component';

const routes: Routes = [
  {path: '', component: AlumnosWrapperComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule {}
