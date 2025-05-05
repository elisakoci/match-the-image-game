const getPokemonData = async (pokemonUrl) => {
  try {
    const response = await fetch(pokemonUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching pokemon data", error);
  }
};

export default getPokemonData;
