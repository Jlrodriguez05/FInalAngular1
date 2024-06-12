import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../../modulos/material/material.module';
import { RickAndMortyService } from '../../servicios/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-locaciones',
  standalone: true,
  imports: [MaterialModule, HttpClientModule, CommonModule, RouterLink],
  providers:[RickAndMortyService],
  templateUrl: './lista-locaciones.component.html',
  styleUrl: './lista-locaciones.component.css'
})
export class ListaLocacionesComponent implements OnInit{
  @Input() data:any;
  
  constructor(){}
  ngOnInit(): void {
    console.log(this.data)
  }

}
