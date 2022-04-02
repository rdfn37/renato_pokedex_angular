import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { Gym } from '../modelsG/gym';

type ApiResponse = {
  results: Gym[];
};

@Injectable({
  providedIn: 'root'
})
export class XyService {
  private readonly baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getGyms(): Observable<Gym[]> {
    const url = this.baseUrl + "/xy_gyms"

    return this.http.get<Gym[]>(url)
  }
}
