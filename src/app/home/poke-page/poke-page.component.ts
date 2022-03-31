import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Pokemon } from '../models/pokemon';
import { HomeService } from './../home.service';

@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.scss'],
})
export class PokePageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private homeService: HomeService) {}

  private readonly urlBase = "https://pokeapi.co/api/v2/pokemon/"

  pokemon?: Pokemon

  baseTotal = 0

  displayedColumns: string[] = ['name', 'base_stat'];

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.homeService.getPokemon(this.urlBase + id).subscribe({
      next: data => {
        this.pokemon = data
        this.pokemon?.stats.forEach(stat => {
          this.baseTotal += stat.base_stat
        })
      }
    })

  }
}
