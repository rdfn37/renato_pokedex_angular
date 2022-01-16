import { Pokemon } from './models/pokemon';
import { Component } from '@angular/core';

import { PokeApiService } from './service/poke-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pokedex';

  card: boolean = false

  pokemonNomeId: string = "";

  pokemonData: Pokemon = <Pokemon>{}

  search: string = '';
  getPokemon() {
    this.pokeApiService.getPokemon(this.search).subscribe({
      next: (data) => {
        this.card = true
        this.pokemonData = data
        console.log(this.pokemonData.sprites.other.home.front_default)
      }
    })
  }
  constructor(private pokeApiService: PokeApiService) { }
}
