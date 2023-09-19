import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarVueloComponent } from './reservar-vuelo.component';

describe('ReservarVueloComponent', () => {
  let component: ReservarVueloComponent;
  let fixture: ComponentFixture<ReservarVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarVueloComponent]
    });
    fixture = TestBed.createComponent(ReservarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
