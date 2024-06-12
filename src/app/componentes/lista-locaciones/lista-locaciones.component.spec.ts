import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLocacionesComponent } from './lista-locaciones.component';

describe('ListaLocacionesComponent', () => {
  let component: ListaLocacionesComponent;
  let fixture: ComponentFixture<ListaLocacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaLocacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLocacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
