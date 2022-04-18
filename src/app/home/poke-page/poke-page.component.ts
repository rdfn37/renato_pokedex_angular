import { EvolutionChain } from './../models/evolution-chain';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Pokemon } from '../models/pokemon';
import { HomeService } from './../home.service';

@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.scss'],
})
export class PokePageComponent implements OnInit {
  // Responsivity
  currentScreenSize!: string;
  destroyed = new Subject<void>();

  colspan!: number;

  statSpan!: number;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  displayedColumns = ['name', 'base_stat'];

  evolutionChain$?: Observable<EvolutionChain>;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';

            switch (this.currentScreenSize) {
              case 'XSmall':
                this.colspan = 12;
                break;
              case 'Small':
                this.colspan = 12;
                break;
              case 'Medium':
                this.colspan = 6;
                break;
              default:
                this.colspan = 6;
            }
          }
        }
      });
  }

  private readonly urlBase = 'https://pokeapi.co/api/v2/pokemon/';

  pokemon$!: Observable<Pokemon>;

  baseTotal = 0;

  // displayedColumns: string[] = ['stat', 'value'];

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.pokemon$ = this.homeService.getPokemon(this.urlBase + id);

    this.pokemon$.subscribe({
      next: (data) => {
        data.stats.forEach((stat) => {
          this.baseTotal += stat.base_stat;
        }),
          this.homeService.getSpecie(data.species.url).subscribe({
            next: (data) => {
              // console.log(data.evolution_chain.url);
              this.homeService.getEvolutionChain(data.evolution_chain.url).subscribe({
                next: data => console.log(data)
              })
              this.evolutionChain$ = this.homeService
                .getEvolutionChain(data.evolution_chain.url)
            },
          });
      },
    });
  }
}
