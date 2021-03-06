import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
import { Router } from '@angular/router';
import { PokemonService } from './pokemon.service';

​
@Component({
	selector: 'list-pokemon',
	templateUrl: './app/pokemon/list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
​
	pokemons: Pokemon[] = null;
​
	constructor(private router: Router, private _pokemonService: PokemonService) { }
​
	ngOnInit(): void {
		//this.pokemons = this._pokemonService.getPokemons();

		this._pokemonService.getPokemons().subscribe(x => this.pokemons = x); // On souscrit à une connexion à la BDD
	}
​
	selectPokemon(pokemon: Pokemon): void {
		console.log('Vous avez selectionné ' + pokemon.name);
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}
}