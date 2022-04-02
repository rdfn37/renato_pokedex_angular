import { HomePokemon } from './home/models/homePokemon';
import { Component } from '@angular/core';

import { PokeApiService } from './service/poke-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private pokeApiService: PokeApiService) { }
}
