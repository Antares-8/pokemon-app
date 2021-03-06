"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// remplace la BDD pour le moment
exports.POKEMONS = [
    {
        id: 1,
        name: "Bulbizarre",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 2,
        name: "Salamèche",
        hp: 28,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 3,
        name: "Carapuce",
        hp: 21,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 4,
        name: "Aspicot",
        hp: 16,
        cp: 2,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
        types: ["Insecte", "Poison"],
        created: new Date()
    },
    {
        id: 5,
        name: "Roucool",
        hp: 30,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 6,
        name: "Rattata",
        hp: 18,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 7,
        name: "Piafabec",
        hp: 14,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 8,
        name: "Abo",
        hp: 16,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
        types: ["Poison"],
        created: new Date()
    },
    {
        id: 9,
        name: "Pikachu",
        hp: 21,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
        types: ["Electrik"],
        created: new Date()
    },
    {
        id: 10,
        name: "Sabelette",
        hp: 19,
        cp: 3,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 11,
        name: "Mélofée",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
        types: ["Fée"],
        created: new Date()
    },
    {
        id: 12,
        name: "Goupix",
        hp: 17,
        cp: 8,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 13,
        name: "Evoli",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 14,
        name: "Léviator",
        hp: 48,
        cp: 8,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png",
        types: ["Eau", "Vol"],
        created: new Date()
    },
    {
        id: 15,
        name: "Amonistar",
        hp: 20,
        cp: 3,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/139.png",
        types: ["Roche", "Eau"],
        created: new Date()
    },
    {
        id: 16,
        name: "Lucario",
        hp: 21,
        cp: 25,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/448.png",
        types: ["Combat", "Acier"],
        created: new Date()
    },
    {
        id: 17,
        name: "Feunard",
        hp: 24,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 18,
        name: "Raichu",
        hp: 28,
        cp: 8,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png",
        types: ["Electrik"],
        created: new Date()
    },
    {
        id: 19,
        name: "Aquali",
        hp: 19,
        cp: 3,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png",
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 20,
        name: "Voltali",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png",
        types: ["Electrik"],
        created: new Date()
    },
    {
        id: 21,
        name: "Pyroli",
        hp: 17,
        cp: 8,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 22,
        name: "Noctali",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png",
        types: ["Ténèbre"],
        created: new Date()
    },
    {
        id: 23,
        name: "Givrali",
        hp: 48,
        cp: 8,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png",
        types: ["Glace"],
        created: new Date()
    },
    {
        id: 24,
        name: "Phyllali",
        hp: 20,
        cp: 3,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png",
        types: ["Plante"],
        created: new Date()
    },
    {
        id: 25,
        name: "Mentali",
        hp: 21,
        cp: 25,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png",
        types: ["Psy"],
        created: new Date()
    },
    {
        id: 26,
        name: "Nymphali",
        hp: 24,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png",
        types: ["Fée"],
        created: new Date()
    },
];
//# sourceMappingURL=mock-pokemon.js.map