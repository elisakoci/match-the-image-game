const getPokemonsList = async (perPage = 10) => {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  const offset = Math.floor(Math.random() * 1300 / perPage) * perPage;

  try {
    const response = await fetch(`${apiUrl}?limit=${perPage}&offset=${offset}`);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Error fetching pokemons list', error);
  }
};

export default getPokemonsList;
