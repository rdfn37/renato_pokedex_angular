import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AzBattle } from '../modelsG/az-battle';

import { Gym } from '../modelsG/gym';
import { LeagueMembers } from '../modelsG/league-members';
import { LysandreBattle } from '../modelsG/lysandre-battle';
import { RivalBattle } from '../modelsG/rival-battle';

type ApiResponse = {
  results: Gym[];
};

@Injectable({
  providedIn: 'root',
})
export class XyService {
  // private readonly baseUrl = 'http://localhost:3000';
  // private readonly baseUrl = 'https://nuzlockedex-api.herokuapp.com';
  private readonly baseUri = '../../assets/pkmn_xy'

  constructor(private http: HttpClient) {}

  getGyms(): Observable<Gym[]> {
    const url = this.baseUri + '/gyms.json';

    return this.http.get<Gym[]>(url);
  }

  getLeagueMembers(): Observable<LeagueMembers[]> {
    const url = this.baseUri + '/league.json';

    return this.http.get<LeagueMembers[]>(url);
  }

  getRivalBattles(): Observable<RivalBattle[]> {
    const url = this.baseUri + '/rival.json';

    return this.http.get<RivalBattle[]>(url);
  }

  getLysandreBattle(): Observable<LysandreBattle[]> {
    const url = this.baseUri + '/lysandre.json';

    return this.http.get<LysandreBattle[]>(url);
  }

  getAzBattle(): Observable<AzBattle[]> {
    const url = this.baseUri + '/az.json';

    return this.http.get<AzBattle[]>(url);
  }
}
