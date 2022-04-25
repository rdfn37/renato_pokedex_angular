import { Gyms } from './models/gyms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BwService {
  private readonly uri = '../../assets/pkmn_bw/';


  constructor(private http: HttpClient) {}

  getGyms(): Observable<Gyms[]> {
    return this.http.get<Gyms[]>(this.uri + 'gyms.json')
  }

  getLeague(): Observable<Gyms[]> {
    return this.http.get<Gyms[]>(this.uri + 'league.json')
  }
}
