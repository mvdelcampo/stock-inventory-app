import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDesenllantadorasComponent } from './detalle-desenllantadoras.component';

describe('DetalleDesenllantadorasComponent', () => {
  let component: DetalleDesenllantadorasComponent;
  let fixture: ComponentFixture<DetalleDesenllantadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleDesenllantadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleDesenllantadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
