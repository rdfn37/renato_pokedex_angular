import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { Pokemon } from './models/pokemon';

type gen = [number, number]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent implements OnInit {
  pokemonList = [] as Pokemon[];
  name?: string;

  gen1:gen = [0, 151]
  gen2:gen = [151, 100]
  gen3:gen = [251, 135]
  gen4:gen = [386, 107]
  gen5:gen = [493, 156]
  gen6:gen = [649, 72]
  gen7:gen = [721, 88]
  gen8:gen = [809, 89]

  selectedGen = this.gen1

  constructor(private homeService: HomeService) {}

  genPicker(gen: gen) {
    this.selectedGen = gen
    this.pokemonList = []
    this.genList()
  }

  genList() {
    this.homeService.getPokemonList(this.selectedGen).subscribe({
      next: (data) => {
        // console.log(data.results)
        // data.results.forEach((e) => {
        //   this.homeService.getPokemon(e.url).subscribe({
        //     next: (data) => {
        //       this.pokemonList.sort((a, b) => a.id - b.id)
        //       return this.pokemonList.push(data);
        //     },
        //   });
        // })
      },
    });
  }

  ngOnInit(): void {
    this.genList()
  }
}


