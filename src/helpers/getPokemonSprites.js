import getPokemonData from "./getPokemonData";

const getPokemonSprites = async (pokemonsList) => {
  const pokemonPromisesList = pokemonsList.map((pokemon) =>
    getPokemonData(pokemon.url)
  );

  try {
    const pokemonsData = await Promise.all(pokemonPromisesList);

    const pokemonsSprites = pokemonsData.map(
      (pokemonData) =>
        pokemonData.sprites?.other?.["official-artwork"]?.front_shiny
    );

    return pokemonsSprites;
  } catch (error) {
    console.error("Error fetching pokemon sprites", error);
  }
};

export default getPokemonSprites;
