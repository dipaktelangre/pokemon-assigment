import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemons/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonResolverService } from './shared/services/pokemon.resolver';

const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent,
    resolve: { pokemon: PokemonResolverService },
  },

  {
    path: '**',
    redirectTo: 'pokemons',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
