import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../service/sesion.service';
import { AuthState } from 'src/app/autenticacion/components/state/auth.reducer';
import { Store } from '@ngrx/store';
import { selectSesionState } from 'src/app/autenticacion/components/state/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private sesion: SesionService, private router: Router, 
    private authStore: Store<AuthState>) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStore.select(selectSesionState).pipe(
      map((sesion: Sesion) => {
        if(sesion?.usuarioActivo?.esAdmin){
          return true;
        }else{
          this.router.navigate(['inicio']);
          return false;
        }
      })
    );
  }
}
