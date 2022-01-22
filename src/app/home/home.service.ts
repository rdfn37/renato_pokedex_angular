import { Injectable } from '@angular/core';
import { HomePokemon } from '../home/models/homePokemon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './models/pokemon';


@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';

  constructor(private httpClient: HttpClient) {}

  getPokemonList() {
    return this.httpClient.get<HomePokemon>(this.url)
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url)
  }
}
