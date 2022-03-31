import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { HomePokemon } from '../home/models/homePokemon';
import { Pokemon } from './models/pokemon';

type ApiResponse = {
  page: number;
  results: HomePokemon[];
};

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  gen1: [number, number] = [0, 1];

  private readonly url = `https://pokeapi.co/api/v2/pokemon/?offset=`;

  constructor(private httpClient: HttpClient) {}

  getPokemonList(gen: [number, number] = this.gen1): Observable<HomePokemon[]> {
    return this.httpClient.get<ApiResponse>(
      this.url + `${gen[0]}&limit=${gen[1]}`
    ).pipe(map(data => data.results))
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url);
  }
}
