import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';
import { MenuComponent } from './core/components/main-wrapper/menu/menu.component';
import { ToolbarComponent } from './core/components/main-wrapper/toolbar/toolbar.component';
import { HomeWrapperComponent } from './core/components/home-wrapper/home-wrapper.component';
import { ProfesoresWrapperComponent } from './core/components/profesores-wrapper/profesores-wrapper.component';
import { SharedModule } from './shared/shared.module';
import { ModalComfirmComponent } from './core/components/modal-comfirm/modal-comfirm.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PageNoEncontradoComponent } from './core/components/page-no-encontrado/page-no-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    HomeWrapperComponent,
    ProfesoresWrapperComponent,
    ModalComfirmComponent,
    PageNoEncontradoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
