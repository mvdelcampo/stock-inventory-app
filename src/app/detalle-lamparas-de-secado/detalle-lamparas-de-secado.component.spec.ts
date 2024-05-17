import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLamparasDeSecadoComponent } from './detalle-lamparas-de-secado.component';

describe('DetalleLamparasDeSecadoComponent', () => {
  let component: DetalleLamparasDeSecadoComponent;
  let fixture: ComponentFixture<DetalleLamparasDeSecadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleLamparasDeSecadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleLamparasDeSecadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
