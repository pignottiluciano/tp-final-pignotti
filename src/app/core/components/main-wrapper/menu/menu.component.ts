import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/service/sesion.service';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input()
  id?: string;

  @Output()
  idChange = new EventEmitter<string>();

  constructor(private router: Router, private sesionService: SesionService) {}

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
