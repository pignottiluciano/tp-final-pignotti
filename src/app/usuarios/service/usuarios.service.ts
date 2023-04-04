import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${env.apiURL}/usuarios`);
  }
  editarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${env.apiURL}/usuarios/${usuario.id}`, usuario);
  }

  eliminarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.delete<Usuario>(`${env.apiURL}/usuarios/${usuario.id}`);
  }

  agregarUsuario(newUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${env.apiURL}/usuarios`, newUsuario);
  }
}
