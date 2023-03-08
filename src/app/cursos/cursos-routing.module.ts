import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosWrapperComponent } from './components/cursos-wrapper/cursos-wrapper.component';

const routes: Routes = [
  {path: '', component: CursosWrapperComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
