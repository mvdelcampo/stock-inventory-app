import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosEnStockComponent } from './productos-en-stock.component';

describe('ProductosEnStockComponent', () => {
  let component: ProductosEnStockComponent;
  let fixture: ComponentFixture<ProductosEnStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosEnStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosEnStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
