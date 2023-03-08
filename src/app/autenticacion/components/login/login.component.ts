import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      usuario: new FormControl(''),
      contrasena: new FormControl(''),
      esAdmin: new FormControl(false),
    });
  }

  login() {
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin,
    };
    console.log(usuario);
    this.loginService.login(usuario);
  }
}
