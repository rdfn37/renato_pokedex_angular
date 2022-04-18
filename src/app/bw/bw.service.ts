import { Gyms } from './models/gyms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BwService {
  private readonly uri = '../../assets/pkmn_bw/pkmn_bw.json';


  constructor(private http: HttpClient) {}

  getGyms(): Observable<Gyms[]> {
    return this.http.get<Gyms[]>(this.uri)
  }
}
