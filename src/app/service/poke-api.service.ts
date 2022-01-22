import { Pokemon } from '../home/models/pokemon';
import { HomePokemon } from '../home/models/homePokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private readonly baseUrl = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { }

  getPokemon(pokemonNameId: string): Observable<Pokemon> {
    const url = `${this.baseUrl}${pokemonNameId}`;

    return this.http.get<Pokemon>(url);
  }
}
