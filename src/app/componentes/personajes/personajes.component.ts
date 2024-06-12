import { Component } from '@angular/core';
import { MaterialModule } from '../../modulos/material/material.module';
import { RickAndMortyService } from '../../servicios/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaPersonajesComponent } from '../lista-personajes/lista-personajes.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [HttpClientModule, ListaPersonajesComponent,MaterialModule,RouterLink],
  providers:[RickAndMortyService],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  personajes:any;
  constructor(private rymService: RickAndMortyService){}
  ngOnInit(): void {
    this.rymService.personajesD().subscribe(
      resultado =>{
        this.personajes=resultado;
        console.log(this.personajes)
    })
  }
}
