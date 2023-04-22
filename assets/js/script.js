let tituloPrincipal = document.querySelector("h1");
let ultimoPokemon;

tituloPrincipal.addEventListener("click", function (event) {
    tituloPrincipal.innerHTML = "Otro <strong>titulo</strong>";
});

let formPokemon = document.getElementById("formPokemon");

formPokemon.addEventListener("submit", function (event) {
    event.preventDefault();
    getPokemon(pokemonName.value);
});

function getPokemon(namePokemon) {
    let urlBase = "https://pokeapi.co/api/v2/pokemon/";
    fetch(urlBase + namePokemon)
        .then((response) => response.json())
        .then((pokemon) => {
            let { name, weight, stats, sprites } = pokemon;

            let objPokemon = {
                name,
                weight,
                stats,
                sprites,
            };

            ultimoPokemon = objPokemon;
            cargarPokemon(objPokemon);
        })
        .catch((error) => {
            console.log(error);
        });
}

function cargarPokemon(pokemon) {
    let nombrePokemon = document.getElementById("nombrePokemon");
    nombrePokemon.innerText = pokemon.name;
    document.getElementById("pesoPokemon").innerText = pokemon.weight;
    nombrePokemon.innerText = pokemon.name;

    let imagenPokemon = document.querySelector("#imgPokemon");
    imagenPokemon.setAttribute("src", pokemon.sprites.front_default);
    console.log(pokemon.stats);
}
