import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';
import { ActivatedRoute } from '@angular/router';



@Component({
	selector: 'edit-pokemon',
	templateUrl: './app/pokemon/edit-pokemon.component.html'
})

export class EditPokemonComponent implements OnInit { 
    pokemon: Pokemon = null;

    constructor(
        private route: ActivatedRoute,
        private _pokemonService: PokemonService,
        ) { }

    ngOnInit() {
        // récupération de l'id
        let id = +this.route.snapshot.params['id'];
        this._pokemonService.getPokemon(id).subscribe(x => this.pokemon = x);
    }
}