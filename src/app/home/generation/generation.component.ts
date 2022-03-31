import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { HomeService } from '../home.service';
import { Pokemon } from '../models/pokemon';
import { HomePokemon } from '../models/homePokemon';
import { Poke } from '../models/poke';

type gen = [number, number];

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss'],
})
export class GenerationComponent implements OnInit {
  // pokemonList = [] as Pokemon[];

  // generation?: number;

  gen1: gen = [0, 151];
  gen2: gen = [151, 100];
  gen3: gen = [251, 135];
  gen4: gen = [386, 107];
  gen5: gen = [493, 156];
  gen6: gen = [649, 72];
  gen7: gen = [721, 88];
  gen8: gen = [809, 89];

  selectedGen?: gen;

  pokemonList$?: Observable<HomePokemon[]>;
  pokemons = [] as Pokemon[];

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router
  ) {
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.pokemons = []
        this.genList()
      }
    });
  }

  genNav(nav: number) {}

  genList() {
    const gen = this.route.snapshot.params['id'];
    switch (gen) {
      case '1':
        this.selectedGen = this.gen1;
        break;
      case '2':
        this.selectedGen = this.gen2;
        break;
      case '3':
        this.selectedGen = this.gen3;
        break;
      case '4':
        this.selectedGen = this.gen4;
        break;
      case '5':
        this.selectedGen = this.gen5;
        break;
      case '6':
        this.selectedGen = this.gen6;
        break;
      case '7':
        this.selectedGen = this.gen7;
        break;
      case '8':
        this.selectedGen = this.gen8;
        break;
    }

    this.pokemonList$ = this.homeService.getPokemonList(this.selectedGen);
    this.pokemonList$.subscribe({
      next: (data) => {
        data.forEach((pokemon) =>
          this.homeService.getPokemon(pokemon.url).subscribe({
            next: (data) => this.pokemons?.push(data),
            complete: () => this.pokemons.sort((a, b) => a.id - b.id),
          })
        );
      },
    });
  }

  ngOnInit(): void {
  }
}
