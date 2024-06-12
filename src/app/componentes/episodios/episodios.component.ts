import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ListaEpisodiosComponent } from '../lista-episodios/lista-episodios.component';
import { MaterialModule } from '../../modulos/material/material.module';
import { RickAndMortyService } from '../../servicios/rick-and-morty.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [HttpClientModule, ListaEpisodiosComponent,MaterialModule,RouterLink],
  providers:[RickAndMortyService],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent {
  episodios:any;
  constructor(private rymService: RickAndMortyService){}
  ngOnInit(): void {
    this.rymService.episodiosD().subscribe(
      resultado =>{
        this.episodios=resultado;
        console.log(this.episodios)
    })
  }
}
