import { Component } from '@angular/core';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from '../personajes/personajes.component';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ MaterialModule,FormsModule,CommonModule,PersonajesComponent,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
