import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { MenuComponent } from './components/main-wrapper/menu/menu.component';
import { ToolbarComponent } from './components/main-wrapper/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';
import { ProfesoresWrapperComponent } from './components/profesores-wrapper/profesores-wrapper.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';

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
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    AlumnosModule,
    CursosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
