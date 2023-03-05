import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';
import { ProfesoresWrapperComponent } from './components/profesores-wrapper/profesores-wrapper.component';

const routes: Routes = [
  {path: 'inicio', component: HomeWrapperComponent},
  {path: 'profesores', component: ProfesoresWrapperComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: HomeWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}