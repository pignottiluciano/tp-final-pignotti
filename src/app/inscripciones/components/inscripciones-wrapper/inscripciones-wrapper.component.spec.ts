import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesWrapperComponent } from './inscripciones-wrapper.component';

describe('InscripcionesWrapperComponent', () => {
  let component: InscripcionesWrapperComponent;
  let fixture: ComponentFixture<InscripcionesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
