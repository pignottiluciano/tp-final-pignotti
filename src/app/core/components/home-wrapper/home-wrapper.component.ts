import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../service/sesion.service';

@Component({
  selector: 'app-home-wrapper',
  templateUrl: './home-wrapper.component.html',
  styleUrls: ['./home-wrapper.component.scss']
})
export class HomeWrapperComponent implements OnInit {
  constructor(private sesion: SesionService, private router: Router){}

  ngOnInit(){
    // this.sesion.obtenerSesion().subscribe((sesion: Sesion) => {
    //   console.log('Estado Sesaion', sesion)
    //   if(!sesion.sesionActiva){
    //     this.router.navigate(['auth/login']);
    //   }
    // })
  }

}
