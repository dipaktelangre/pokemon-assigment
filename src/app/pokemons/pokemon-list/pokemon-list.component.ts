import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: 'pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  pokemons: any = {};
  searchForm: FormGroup = new FormGroup({
    search: new FormControl(null),
  });

  pageForm: FormGroup = new FormGroup({
    pageSize: new FormControl(20, [Validators.required]),
  });

  /// Searching & sorting
  searchTerm: string = '';
  sortBy: string = 'name';
  sortOrder = 1;
  pageSize = 20;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      if (params) {
        this.searchTerm = params.searchTerm;
        if (params.pageSize) {
          this.pageSize = params.pageSize;
          this.pageForm.get('pageSize')?.setValue(params.pageSize);
          this.getPokemons();
        }
      }
    });
  }
  ngOnInit() {
    this.getPokemons();
  }

  onSearchSubmit() {
    let search = this.searchForm.value.search;
    this.searchTerm = search;
    this.navigateToPage();
  }

  onPageSubmit() {
    let pageSize = this.pageForm.value.pageSize;
    if (!pageSize || pageSize <= 0) return;
    this.pageSize = pageSize;
    this.navigateToPage();
  }

  getPokemons() {
    this.pokemonService.getList(this.pageSize).subscribe((pokemons) => {
      // console.log(pokemons);
      this.pokemons = pokemons;
    });
  }

  loadPokemons(url: string) {
    if (!url) return;
    this.pokemonService.getPokemonByUrl(url).subscribe((pokemons) => {
      // console.log(pokemons);
      this.pokemons = pokemons;
    });
  }

  navigateToPage() {
    let params: any = {};
    params.pageSize = this.pageSize ? this.pageSize : 20;
    if (this.searchTerm) {
      params.searchTerm = this.searchTerm;
    }
    this.router.navigate(['pokemons', { ...params }]);
  }
}
