import { CorePokeapiService } from './../services/core-pokeapi.service';
import { Pokemon } from '../models/pokemon';
import { Component, OnInit } from '@angular/core';

import { PokeApiService } from '../../service/poke-api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showFiller = true;
  search: string = ''
  pokemonData: Pokemon = <Pokemon>{}

  getPokemon() {
    console.log("oi")
    this.corePokeapi.getPokemon(this.search).subscribe({
      next: data => {
        this.pokemonData = data
        console.log(this.pokemonData.name)
      }
    })
  }

  constructor(private corePokeapi: CorePokeapiService) { }

  ngOnInit(): void {
  }

}
