import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlumnosComponent } from './add-alumnos.component';

describe('AddAlumnosComponent', () => {
  let component: AddAlumnosComponent;
  let fixture: ComponentFixture<AddAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
