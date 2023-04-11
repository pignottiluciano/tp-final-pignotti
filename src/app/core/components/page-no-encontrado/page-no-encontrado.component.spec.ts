import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoEncontradoComponent } from './page-no-encontrado.component';

describe('PageNoEncontradoComponent', () => {
  let component: PageNoEncontradoComponent;
  let fixture: ComponentFixture<PageNoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNoEncontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
