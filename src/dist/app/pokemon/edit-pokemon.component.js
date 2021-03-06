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
var pokemon_service_1 = require("./pokemon.service");
var router_1 = require("@angular/router");
var EditPokemonComponent = /** @class */ (function () {
    function EditPokemonComponent(route, _pokemonService) {
        this.route = route;
        this._pokemonService = _pokemonService;
        this.pokemon = null;
    }
    EditPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        // récupération de l'id
        var id = +this.route.snapshot.params['id'];
        this._pokemonService.getPokemon(id).subscribe(function (x) { return _this.pokemon = x; });
    };
    EditPokemonComponent = __decorate([
        core_1.Component({
            selector: 'edit-pokemon',
            templateUrl: './app/pokemon/edit-pokemon.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            pokemon_service_1.PokemonService])
    ], EditPokemonComponent);
    return EditPokemonComponent;
}());
exports.EditPokemonComponent = EditPokemonComponent;
//# sourceMappingURL=edit-pokemon.component.js.map