import { Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListaPersonajesComponent } from './componentes/lista-personajes/lista-personajes.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { EpisodiosComponent } from './componentes/episodios/episodios.component';
import { ListaEpisodiosComponent } from './componentes/lista-episodios/lista-episodios.component';
import { LocacionesComponent } from './componentes/locaciones/locaciones.component';
import { ListaLocacionesComponent } from './componentes/lista-locaciones/lista-locaciones.component';

export const routes: Routes = [
    {
        path:'',
        component: MenuComponent
    },
    {
        path:'personajes',
        component: PersonajesComponent
    },
    {
        path:'episodios',
        component: EpisodiosComponent
    },
    {
        path:'locaciones',
        component: LocacionesComponent
    },


    {
        path:'listaP',
        component: ListaPersonajesComponent
    },
    {
        path:'listaE',
        component: ListaEpisodiosComponent
    },
    {
        path:'listaL',
        component: ListaLocacionesComponent
    },
];
