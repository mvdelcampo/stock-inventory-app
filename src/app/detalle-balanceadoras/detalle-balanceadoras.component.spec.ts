import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBalanceadorasComponent } from './detalle-balanceadoras.component';

describe('DetalleBalanceadorasComponent', () => {
  let component: DetalleBalanceadorasComponent;
  let fixture: ComponentFixture<DetalleBalanceadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleBalanceadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleBalanceadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
