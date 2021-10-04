import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon.component.html',
  host: {
    class: 'card',
  },
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: any;
  pokDetails: any;
  constructor(private pokService: PokemonService, private router: Router) {}
  ngOnInit() {
    this.pokService.getPokemonByUrl(this.pokemon.url).subscribe((pok) => {
      this.pokDetails = pok;
    });
  }

  showPockemonDetails(pokemon: any) {
    this.router.navigate(['pokemon', this.pokDetails.id]);
  }
}
