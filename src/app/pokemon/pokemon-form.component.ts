import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';
​
@Component({
	selector: 'pokemon-form',
	templateUrl: './app/pokemon/pokemon-form.component.html',
	styleUrls: ['./app/pokemon/pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
​
	@Input() pokemon: Pokemon; // propriété d'entrée du composant
    types: Array<string>; // types disponibles pour un pokémon : 'Eau', 'Feu', etc ...
    
	constructor(
		private _pokemonService: PokemonService,
		private router: Router) { }
​
	ngOnInit() {
		// Initialisation de la propriété types
		this.types = this._pokemonService.getPokemonTypes();
	}
​
	// Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
	hasType(type: string): boolean {
		let index = this.pokemon.types.indexOf(type);
		if (index > -1) return true;
		return false;
	}
​
	// Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
	selectType($event: any, type: string): void {
		let checked = $event.target.checked;
		if (checked) {
			this.pokemon.types.push(type);
		} else {
			let index = this.pokemon.types.indexOf(type);
			if (index > -1) {
				this.pokemon.types.splice(index, 1);
			}
		}
	}
​
	// Valide le nombre de types pour chaque pokémon
	isTypesValid(type: string): boolean {
		if (this.pokemon.types.length === 1 && this.hasType(type)) {
			return false;
		}
		if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
			return false;
		}
​
		return true;
	}
​
	// La méthode appelée lorsque le formulaire est soumis.
	onSubmit(): void {
		console.log("Submit form !");

		this._pokemonService.updatePokemon(this.pokemon)
			.subscribe(x => {
				let link = ['/pokemon', this.pokemon.id];
				this.router.navigate(link);
			});	
	}
​
}