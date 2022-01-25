import { Injectable } from '@angular/core';
import { HomePokemon } from '../home/models/homePokemon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './models/pokemon';


@Injectable({
  providedIn: 'root',
})
export class HomeService {
  generations = {
    gen1: [0, 1],
    gen2: [151, 100]
  }



  private readonly url =
    `https://pokeapi.co/api/v2/pokemon/?offset=`;

  constructor(private httpClient: HttpClient) {}

  getPokemonList(gen: [number, number]) {
    return this.httpClient.get<HomePokemon>(this.url + `${gen[0]}&limit=${gen[1]}`)
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url)
  }
}
