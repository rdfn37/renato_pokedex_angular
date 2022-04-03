import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { Gym } from '../modelsG/gym';
import { LeagueMembers } from '../modelsG/league-members';
import { RivalBattle } from '../modelsG/rival-battle';

type ApiResponse = {
  results: Gym[];
};

@Injectable({
  providedIn: 'root',
})
export class XyService {
  // private readonly baseUrl = 'http://localhost:3000';
  private readonly baseUrl = 'https://nuzlockedex-api.herokuapp.com';

  constructor(private http: HttpClient) {}

  getGyms(): Observable<Gym[]> {
    const url = this.baseUrl + '/xy_gyms';

    return this.http.get<Gym[]>(url);
  }

  getLeagueMembers(): Observable<LeagueMembers[]> {
    const url = this.baseUrl + '/xy_league_members';

    return this.http.get<LeagueMembers[]>(url);
  }

  getRivalBattles(): Observable<RivalBattle[]> {
    const url = this.baseUrl + '/xy_rival_battles';

    return this.http.get<RivalBattle[]>(url);
  }
}
