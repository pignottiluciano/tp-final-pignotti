import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SesionService } from './core/service/sesion.service';
import { Sesion } from './models/sesion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp-final-pignotti';
  idMenu?: string;
  sesion$!: Observable<Sesion>;
  sesionActiv: boolean = false;
  
  constructor(
    private sesion: SesionService
  ) {}
  async ngOnInit(): Promise<void> {
    this.idMenu = 'inicio';
    this.sesion.obtenerSesion().subscribe((sesion: Sesion) => {
      console.log('Estado Sesaion', sesion)
      this.sesionActiv = sesion.sesionActiva;
    })
    // this.sesion$ = this.sesionService.obtenerSesion();
    // console.log(this.sesion$)
  }
}
