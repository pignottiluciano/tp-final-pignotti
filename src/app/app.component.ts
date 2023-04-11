import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SesionService } from './core/service/sesion.service';
import { Sesion } from './models/sesion';
import { Usuario } from './models/usuario';
import {
  selectSesionActiva,
  selectSesionState,
  selectUsuarioActivo,
} from './autenticacion/components/state/auth.selectors';
import { AuthState } from './autenticacion/components/state/auth.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tp-final-pignotti';
  idMenu?: string;
  sesion$!: Observable<Sesion>;
  sesionActiv: boolean = false;
  sesionActiva$!: any;
  usuarioActivo$!: any;

  constructor(
    private sesion: SesionService,
    private authStore: Store<AuthState>
  ) {}
  async ngOnInit(): Promise<void> {
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
    this.idMenu = 'inicio';
  }
}
