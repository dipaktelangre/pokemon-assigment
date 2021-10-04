import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { PokemonService } from './pokemon.service';

@Injectable({ providedIn: 'root' })
export class PokemonResolverService implements Resolve<any> {
  constructor(private pokemonService: PokemonService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = Number(route.paramMap.get('id'));
    return this.pokemonService.getPokemonById(id);
  }
}
