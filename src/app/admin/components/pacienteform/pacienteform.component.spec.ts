import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteformComponent } from './pacienteform.component';

describe('PacienteformComponent', () => {
  let component: PacienteformComponent;
  let fixture: ComponentFixture<PacienteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
