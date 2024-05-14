import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenllantadorasComponent } from './desenllantadoras.component';

describe('DesenllantadorasComponent', () => {
  let component: DesenllantadorasComponent;
  let fixture: ComponentFixture<DesenllantadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesenllantadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesenllantadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
