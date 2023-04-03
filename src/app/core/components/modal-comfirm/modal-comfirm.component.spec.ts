import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComfirmComponent } from './modal-comfirm.component';

describe('ModalComfirmComponent', () => {
  let component: ModalComfirmComponent;
  let fixture: ComponentFixture<ModalComfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
