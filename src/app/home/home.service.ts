import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { HomePokemon } from '../home/models/homePokemon';
import { EvolutionChain } from './models/evolution-chain';
import { Pokemon } from './models/pokemon';

type ApiResponse = {
  page: number;
  results: HomePokemon[];
};

type Specie = {
  evolution_chain: {
    url: string;
  };
};

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  gen1: [number, number] = [0, 1];
  // evolutionChainUrl?: string;

  private readonly url = `https://pokeapi.co/api/v2/pokemon/?offset=`;

  constructor(private httpClient: HttpClient) {}

  getPokemonList(gen: [number, number] = this.gen1): Observable<HomePokemon[]> {
    return this.httpClient
      .get<ApiResponse>(this.url + `${gen[0]}&limit=${gen[1]}`)
      .pipe(map((data) => data.results));
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url);
  }

  getSpecie(speciesUrl: string): Observable<Specie> {
    return this.httpClient.get<Specie>(speciesUrl)
  }

  getEvolutionChain(evolutionChainUrl: string): Observable<EvolutionChain> {
    return this.httpClient.get<EvolutionChain>(evolutionChainUrl)
  }
}
