"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_pokemon_1 = require("./mock-pokemon");
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var pokemons = mock_pokemon_1.POKEMONS;
        return { pokemons: pokemons };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//GET api/pokemons
//GET api/pokemons/1
//PUT api/pokemons/1
//GET api/pokemons?name=blabla
//# sourceMappingURL=in-memory-data.service.js.map