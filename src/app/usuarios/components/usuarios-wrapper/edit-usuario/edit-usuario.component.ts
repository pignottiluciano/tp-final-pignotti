import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/usuarios/service/usuarios.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent {
  formularioEditar: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    public dialogRef: MatDialogRef<EditUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) {
    this.formularioEditar = new FormGroup({
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      usuario: new FormControl(data.usuario),
      esAdmin: new FormControl(data.usuario)
    });
  }

  edit() {
    const usuario: Usuario = {
      id: this.data.id,
      usuario: this.formularioEditar.value.usuario,
      nombre: this.formularioEditar.value.nombre,
      apellido: this.formularioEditar.value.apellido,
      contrasena: this.data.contrasena,
      esAdmin: this.formularioEditar.value.esAdmin
    };
    this.usuariosService.editarUsuario(usuario).subscribe((usuario: Usuario) => {
      this.dialogRef.close(usuario);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
