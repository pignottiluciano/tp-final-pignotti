import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInscripcionComponent } from './delete-inscripcion.component';

describe('DeleteInscripcionComponent', () => {
  let component: DeleteInscripcionComponent;
  let fixture: ComponentFixture<DeleteInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
