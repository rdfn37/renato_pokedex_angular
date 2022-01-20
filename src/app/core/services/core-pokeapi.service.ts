import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CorePokeapiService {
  private readonly baseUrl = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { }

  getPokemon(pokemonNameId: string): Observable<Pokemon> {
    const url = `${this.baseUrl}${pokemonNameId}`;

    return this.http.get<Pokemon>(url);
  }
}
