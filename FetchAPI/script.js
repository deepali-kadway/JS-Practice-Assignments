// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => {console.error(error)})

fetchPokemon();
async function fetchPokemon(){

    const pokemonInput = document.getElementById("pokemonInput").value.toLowerCase();
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);

        if(!response.ok){
            throw new Error("Could not fetch the data");
        }

        const data = await response.json();
 //     console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const pokemonImg = document.getElementById("pokemonImage");

        pokemonImg.src = pokemonSprite
        pokemonImg.style.display = "block";        
    }
    catch(error){
        console.log(error);
    }
}