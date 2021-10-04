import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getList(limit = 20) {
    let params = new HttpParams();
    params = params.append('limit', limit);
    params = params.append('offset', 0);
    return this.http.get(`${this.baseUrl}pokemon`, { params });
  }

  getPokemonByUrl(url: string) {
    return this.http.get(url);
  }

  getPokemonById(id: number) {
    return this.http.get(`${this.baseUrl}pokemon/${id}`);
  }
}
