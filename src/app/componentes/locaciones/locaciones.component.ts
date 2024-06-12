import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ListaLocacionesComponent } from '../lista-locaciones/lista-locaciones.component';
import { MaterialModule } from '../../modulos/material/material.module';
import { RickAndMortyService } from '../../servicios/rick-and-morty.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-locaciones',
  standalone: true,
  imports: [HttpClientModule, ListaLocacionesComponent,MaterialModule,RouterLink],
  providers:[RickAndMortyService],
  templateUrl: './locaciones.component.html',
  styleUrl: './locaciones.component.css'
})
export class LocacionesComponent {
  locaciones:any;
  constructor(private rymService: RickAndMortyService){}
  ngOnInit(): void {
    this.rymService.locacionesD().subscribe(
      resultado =>{
        this.locaciones=resultado;
        console.log(this.locaciones)
    })
  }

}
