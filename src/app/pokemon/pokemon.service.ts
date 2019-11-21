import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';


@Injectable()

export class PokemonService {
    // retourne tous les pokemons
    // getPokemons() : Pokemon[] {
    //     return POKEMONS;
    // }

    private pokemonsUrl = 'api/pokemons';

    constructor(private http: HttpClient) { }

    getPokemons() : Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.pokemonsUrl);
    }

    // retourne détail d'un pokemon par id
    // getPokemon(id: number) : Pokemon {
    //     let pokemons = this.getPokemons();
    
    //   for(let index = 0; index < pokemons.length; index++) {
    //     if(id === pokemons[index].id) {
    //       return pokemons[index];
    //     }
    //   } 
    // }

    getPokemon(id: number) : Observable<Pokemon> {
      // return this.http.get<Pokemon>(this.pokemonsUrl + "/" + id);
      //écriture plus lisible ci-dessous. le ${} permet de mettre des variables sans avoir à les concaténer
      // Ici on concatène l'url avec l'id
      const url = `${this.pokemonsUrl}/${id}`;
      return this.http.get<Pokemon>(url);
    }


    updatePokemon(pokemon: Pokemon) : Observable<Pokemon> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

      return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions);
    }

    deletePokemon(id: number) : Observable<Pokemon> {
      const url = `${this.pokemonsUrl}/${id}`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

      return this.http.delete<Pokemon>(url, httpOptions)
    }

     // Retourne la liste des types des Pokémons
     getPokemonTypes(): Array<string> {
      return [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
      ];
    }
}