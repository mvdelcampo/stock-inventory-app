import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCabinasDePinturaComponent } from './detalle-cabinas-de-pintura.component';

describe('DetalleCabinasDePinturaComponent', () => {
  let component: DetalleCabinasDePinturaComponent;
  let fixture: ComponentFixture<DetalleCabinasDePinturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleCabinasDePinturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleCabinasDePinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
