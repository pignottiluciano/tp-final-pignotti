import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../../service/login.service';
import { AuthState } from '../state/auth.reducer';
import { cargarSesion } from '../state/auth.actions';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  suscripcion!: Subscription;
  errorSesion: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private authStore: Store<AuthState>
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
      esAdmin: new FormControl(false),
    });
  }

  login() {
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin,
    };

    this.suscripcion = this.loginService
      .login(usuario)
      .subscribe((sesion: Sesion) => {
        this.authStore.dispatch(cargarSesion({ sesion: sesion }));

        this.router.navigate(['inicio']);
      });
  }
}
