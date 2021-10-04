import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'pokemon-details.component.html',
  styleUrls: ['pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any;
  constructor(private route: ActivatedRoute, public location: Location) {}
  ngOnInit() {
    this.pokemon = this.route.snapshot.data.pokemon;
    console.log(this.pokemon);
  }

  goBack() {
    if (window.history.length > 0) {
    }
  }
}
