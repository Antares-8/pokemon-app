"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemon_service_1 = require("./pokemon.service");
var DetailPokemonComponent = /** @class */ (function () {
    function DetailPokemonComponent(route, router, _pokemonService) {
        this.route = route;
        this.router = router;
        this._pokemonService = _pokemonService;
        this.pokemons = null;
        this.pokemon = null;
    }
    DetailPokemonComponent.prototype.ngOnInit = function () {
        // récupérer la liste des pokemons
        //this.pokemons = POKEMONS;
        var _this = this;
        // Récupérer l'id passé en paramètre de la route
        var id = +this.route.snapshot.paramMap.get('id'); // le + c'est pour dire que c'est un number, pas une string
        // Récupérer un pokemon par son id avec service et injection de dépendance
        this._pokemonService.getPokemon(id).subscribe(function (x) { return _this.pokemon = x; });
        // Récupérer un pokemon par son id quand on n'a pas de services donc pas d'injection de dépendances
        // for (let i = 0; i < this.pokemons.length; i++) {
        //     if (this.pokemons[i].id == id) {
        //         this.pokemon = this.pokemons[i];                
        //     }
        // }
        // façon alternative, plus courte : 
        //this.pokemon = this.pokemons.filter(x => x.id == id)[0];
    };
    DetailPokemonComponent.prototype.goBack = function () {
        // Méthode permettant de revenir sur la page /pokemon
        this.router.navigate(['/pokemon/all']);
    };
    DetailPokemonComponent.prototype.goEdit = function (pokemon) {
        var link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    };
    DetailPokemonComponent.prototype.goDelete = function (id) {
        var _this = this;
        // Effacer un pokemon grâce à son id
        this._pokemonService.deletePokemon(id)
            .subscribe(function () { return _this.goBack(); });
    };
    DetailPokemonComponent = __decorate([
        core_1.Component({
            selector: 'detail-pokemon',
            templateUrl: './app/pokemon/detail-pokemon.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            pokemon_service_1.PokemonService])
    ], DetailPokemonComponent);
    return DetailPokemonComponent;
}());
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map