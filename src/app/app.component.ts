import { Pokemon } from './models/pokemon';
import { Component } from '@angular/core';

import { PokeApiService } from './service/poke-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

  pokemonNomeId: string = "charizard";

  // teste: Pokemon = {};

  getPokemon() {
    this.pokeApiService.getPokemon(this.pokemonNomeId).subscribe({
      next: (data) => {
        this.pokemonNomeId = data.name
        console.log(data)
      }
    })
  }

  constructor(private pokeApiService: PokeApiService) { }
}
