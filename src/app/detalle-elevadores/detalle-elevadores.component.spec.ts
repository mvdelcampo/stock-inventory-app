import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleElevadoresComponent } from './detalle-elevadores.component';

describe('DetalleElevadoresComponent', () => {
  let component: DetalleElevadoresComponent;
  let fixture: ComponentFixture<DetalleElevadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleElevadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleElevadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
