import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private URLBase = 'https://rickandmortyapi.com/api'
  
  constructor(private http: HttpClient) { }
  personajesD(){
    return this.http.get(this.URLBase +'/character')
  }
  episodiosD(){
    return this.http.get(this.URLBase +'/episode')
  }
  locacionesD(){
    return this.http.get(this.URLBase +'/location')
  }
}
