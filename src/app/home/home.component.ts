import { PokeApiService } from './../service/poke-api.service';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonList = [] as Pokemon[]

  constructor(
    private homeService: HomeService,
    ) { }

    ngOnInit(): void {
      this.homeService.getPokemonList().subscribe({
        next: data => {
          // console.log(data.results)
          // console.log(data.results[0].name)
          // console.log(data.results[0].url)

          data.results.forEach(e => {
            this.homeService.getPokemon(e.url).subscribe({
              next: data => {
                console.log(data.sprites.front_default)
                this.pokemonList.push(data)
              }
            })
          })
        }
      })
  }

}
