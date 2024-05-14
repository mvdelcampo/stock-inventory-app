import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamparasDeSecadoComponent } from './lamparas-de-secado.component';

describe('LamparasDeSecadoComponent', () => {
  let component: LamparasDeSecadoComponent;
  let fixture: ComponentFixture<LamparasDeSecadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LamparasDeSecadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LamparasDeSecadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
