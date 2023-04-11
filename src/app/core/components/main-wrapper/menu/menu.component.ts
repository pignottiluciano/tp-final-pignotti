import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/service/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { AuthState } from 'src/app/autenticacion/components/state/auth.reducer';
import { Store } from '@ngrx/store';
import { selectUsuarioAdmin } from 'src/app/autenticacion/components/state/auth.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input()
  id?: string;

  @Output()
  idChange = new EventEmitter<string>();

  usuarioAdmin$!: any;

  constructor(private router: Router, private sesionService: SesionService,
    private authStore: Store<AuthState>) {}

  
  async ngOnInit(): Promise<void> {
    this.usuarioAdmin$ = this.authStore.select(selectUsuarioAdmin);
  }

  changeWrapper(type: string) {
    this.id = type.toUpperCase();
    this.idChange.emit(this.id);
  }

  logout() {
    let sesion: Sesion = {
      sesionActiva: false,
    };
    this.sesionService.logout(sesion);
    this.router.navigate(['auth/login']);
  }
}
