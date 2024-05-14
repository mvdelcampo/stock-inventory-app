import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinasDePinturaComponent } from './cabinas-de-pintura.component';

describe('CabinasDePinturaComponent', () => {
  let component: CabinasDePinturaComponent;
  let fixture: ComponentFixture<CabinasDePinturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinasDePinturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabinasDePinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
