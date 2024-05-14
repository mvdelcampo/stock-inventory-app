import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevadoresComponent } from './elevadores.component';

describe('ElevadoresComponent', () => {
  let component: ElevadoresComponent;
  let fixture: ComponentFixture<ElevadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElevadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElevadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
