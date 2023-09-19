import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarTickeComponent } from './generar-ticke.component';

describe('GenerarTickeComponent', () => {
  let component: GenerarTickeComponent;
  let fixture: ComponentFixture<GenerarTickeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarTickeComponent]
    });
    fixture = TestBed.createComponent(GenerarTickeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
