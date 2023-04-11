import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosWrapperComponent } from './components/usuarios-wrapper/usuarios-wrapper.component';
import { ListaUsuariosComponent } from './components/usuarios-wrapper/lista-usuarios/lista-usuarios.component';
import { AddUsuarioComponent } from './components/usuarios-wrapper/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './components/usuarios-wrapper/edit-usuario/edit-usuario.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './state/usuarios-state.effects';
import { reducer, usersStateFeatureKey } from './state/usuarios-state.reducer';


@NgModule({
  declarations: [
  
  
    UsuariosWrapperComponent,
          ListaUsuariosComponent,
          AddUsuarioComponent,
          EditUsuarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuariosRoutingModule,
    StoreModule.forFeature(usersStateFeatureKey, reducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsuariosModule { }
