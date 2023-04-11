import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { SharedModule } from '../shared/shared.module';
import { authFeatureKey, authReducer } from './components/state/auth.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [LoginComponent, AutenticacionInicioComponent],
  imports: [CommonModule, AutenticacionRoutingModule, SharedModule,
    StoreModule.forFeature(authFeatureKey, authReducer)],
})
export class AutenticacionModule {}
