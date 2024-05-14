import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceadorasComponent } from './balanceadoras.component';

describe('BalanceadorasComponent', () => {
  let component: BalanceadorasComponent;
  let fixture: ComponentFixture<BalanceadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
