import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosWrapperComponent } from './components/alumnos-wrapper/alumnos-wrapper.component';
import { AddAlumnosComponent } from './components/alumnos-wrapper/add-alumnos/add-alumnos.component';
import { EditAlumnoComponent } from './components/alumnos-wrapper/edit-alumno/edit-alumno.component';
import { ListaAlumnosComponent } from './components/alumnos-wrapper/lista-alumnos/lista-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { alumnoStateFeatureKey, reducer } from './state/alumno-state.reducer';
import { AlumnosEffects } from './state/alumno-state.effects';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AlumnosWrapperComponent,
    AddAlumnosComponent,
    EditAlumnoComponent,
    ListaAlumnosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule,
    StoreModule.forFeature(alumnoStateFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosEffects]),
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
})
export class AlumnosModule {}
