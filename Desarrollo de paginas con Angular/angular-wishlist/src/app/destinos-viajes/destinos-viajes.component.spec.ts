import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosViajesComponent } from './destinos-viajes.component';

describe('DestinosViajesComponent', () => {
  let component: DestinosViajesComponent;
  let fixture: ComponentFixture<DestinosViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinosViajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinosViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
