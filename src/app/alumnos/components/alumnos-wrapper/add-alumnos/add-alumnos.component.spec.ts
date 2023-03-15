import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { AlumnosService } from 'src/app/alumnos/service/alumnos.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AddAlumnosComponent } from './add-alumnos.component';

describe('AddAlumnosComponent', () => {
  let component: AddAlumnosComponent;
  let fixture: ComponentFixture<AddAlumnosComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SharedModule, MaterialModule, MatDialogModule],
      declarations: [AddAlumnosComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene cuando dejamos campos requeridos vacios', () => {
    const formulario = component.formularioAgregar;
    const apellido = formulario.controls['apellido'];

    apellido.setValue('Frank');

    expect(formulario.valid).toBeFalse();
  });

  it('El formulario cambia a valid cuando ingresamos los campos', () => {
    const formulario = component.formularioAgregar;

    const nombre = formulario.controls['nombre'];
    const apellido = formulario.controls['apellido'];
    const edad = formulario.controls['edad'];
    const estado = formulario.controls['estado'];

    nombre.setValue('Lautaro');
    apellido.setValue('Frank');
    edad.setValue(22);
    estado.setValue(true);

    expect(formulario.valid).toBeTrue();
  });
});
