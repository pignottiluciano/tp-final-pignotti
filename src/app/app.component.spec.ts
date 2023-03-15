import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AddAlumnosComponent } from './alumnos/components/alumnos-wrapper/add-alumnos/add-alumnos.component';
import { AlumnosWrapperComponent } from './alumnos/components/alumnos-wrapper/alumnos-wrapper.component';
import { ListaAlumnosComponent } from './alumnos/components/alumnos-wrapper/lista-alumnos/lista-alumnos.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from './core/components/main-wrapper/toolbar/toolbar.component';
import { MenuComponent } from './core/components/main-wrapper/menu/menu.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        MaterialModule,
        MatDialogModule,
      ],
      declarations: [
        AppComponent,
        AlumnosWrapperComponent,
        ListaAlumnosComponent,
        AddAlumnosComponent,
        ToolbarComponent,
        MenuComponent,
      ],
      providers: [SharedModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tp-final-pignotti'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tp-final-pignotti');
  });
});
