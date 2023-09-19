import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaVuelosComponent } from './agencia-vuelos.component';

describe('AgenciaVuelosComponent', () => {
  let component: AgenciaVuelosComponent;
  let fixture: ComponentFixture<AgenciaVuelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgenciaVuelosComponent]
    });
    fixture = TestBed.createComponent(AgenciaVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
