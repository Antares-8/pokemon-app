import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
import { PokemonService } from './pokemon.service';

​
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemon/detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
​
    pokemons: Pokemon[] = null;
    pokemon: Pokemon = null;
​
    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private _pokemonService : PokemonService) { }
​
    ngOnInit(): void {

        // récupérer la liste des pokemons
        //this.pokemons = POKEMONS;
        
        // Récupérer l'id passé en paramètre de la route
        let id = +this.route.snapshot.paramMap.get('id'); // le + c'est pour dire que c'est un number, pas une string
        // Récupérer un pokemon par son id avec service et injection de dépendance
        this._pokemonService.getPokemon(id).subscribe(x => this.pokemon = x);


        // Récupérer un pokemon par son id quand on n'a pas de services donc pas d'injection de dépendances
        // for (let i = 0; i < this.pokemons.length; i++) {
        //     if (this.pokemons[i].id == id) {
        //         this.pokemon = this.pokemons[i];                
        //     }
        // }
        // façon alternative, plus courte : 
        //this.pokemon = this.pokemons.filter(x => x.id == id)[0];
    }
​
    goBack(): void {

        // Méthode permettant de revenir sur la page /pokemon
        this.router.navigate(['/pokemon/all']);
    }

    goEdit(pokemon: Pokemon): void {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    goDelete(id: number) : void {
        // Effacer un pokemon grâce à son id
        this._pokemonService.deletePokemon(id)
            .subscribe(() => this.goBack());
    }


}