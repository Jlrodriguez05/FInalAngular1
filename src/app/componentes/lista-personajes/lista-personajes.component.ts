import { Component, Input, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../servicios/rick-and-morty.service';
import { MaterialModule } from '../../modulos/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [MaterialModule, HttpClientModule, CommonModule, RouterLink],
  providers:[RickAndMortyService],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css'
})
export class ListaPersonajesComponent implements OnInit {
  @Input() data:any;
  

  constructor(){}
  ngOnInit(): void {
    console.log(this.data)
  }
}
