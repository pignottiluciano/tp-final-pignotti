import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosService } from 'src/app/alumnos/service/alumnos.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AddAlumnosComponent } from './add-alumnos.component';

describe('AddAlumnosComponent', () => {
  let component: AddAlumnosComponent;
  let fixture: ComponentFixture<AddAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AddAlumnosComponent, SharedModule]
      ,
      providers: [AlumnosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });
});
