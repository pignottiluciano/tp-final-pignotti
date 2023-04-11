import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/usuarios/service/usuarios.service';
import { AddUsuario } from 'src/app/usuarios/state/usuarios-state.actions';
import { UsuariosState } from 'src/app/usuarios/state/usuarios-state.reducer';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent {
  formularioAgregar: FormGroup;
  usuarios!: Usuario[];
  usuarios$!: Observable<Usuario[]>;
  suscription: any;

  constructor(
    private usuariosService: UsuariosService,
    public dialogRef: MatDialogRef<AddUsuarioComponent>,
    private store : Store<UsuariosState>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formularioAgregar = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      contasena: new FormControl('', [Validators.required]),
      esAdmin: new FormControl('', [Validators.required])
    });
  }
  async ngOnInit(): Promise<void> {
    this.usuarios$ = this.usuariosService.obtenerUsuarios();
    this.suscription  = this.usuarios$.subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }

  addUsuario() {
    let id: number = this.usuarios.length;
    const newUsuario: Usuario = {
      id: id + 1,
      usuario: this.formularioAgregar.value.usuario,
      nombre: this.formularioAgregar.value.nombre,
      apellido: this.formularioAgregar.value.apellido,
      contrasena: this.formularioAgregar.value.contasena,
      esAdmin: this.formularioAgregar.value.esAdmin
    };
    this.usuariosService.agregarUsuario(newUsuario).subscribe((usuario: Usuario) => {
      this.dialogRef.close(usuario);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
