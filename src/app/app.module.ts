import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';
import { MainWrapperComponent } from './core/components/main-wrapper/main-wrapper.component';
import { MenuComponent } from './core/components/main-wrapper/menu/menu.component';
import { ToolbarComponent } from './core/components/main-wrapper/toolbar/toolbar.component';
import { HomeWrapperComponent } from './core/components/home-wrapper/home-wrapper.component';
import { ProfesoresWrapperComponent } from './core/components/profesores-wrapper/profesores-wrapper.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    MenuComponent,
    ToolbarComponent,
    HomeWrapperComponent,
    ProfesoresWrapperComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    AlumnosModule,
    CursosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
