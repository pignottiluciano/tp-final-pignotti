import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AddAlumnosComponent } from './alumnos/components/alumnos-wrapper/add-alumnos/add-alumnos.component';
import { AlumnosWrapperComponent } from './alumnos/components/alumnos-wrapper/alumnos-wrapper.component';
import { ListaAlumnosComponent } from './alumnos/components/alumnos-wrapper/lista-alumnos/lista-alumnos.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        AppComponent,
        AlumnosWrapperComponent,
        ListaAlumnosComponent,
        AddAlumnosComponent,
        SharedModule
      ],
      providers: [SharedModule]
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

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('tp-final-pignotti app is running!');
  });
});
