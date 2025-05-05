import getPokemonsList from "./getPokemonsList";
import getPokemonSprites from "./getPokemonSprites";

const generateRandomPokemonImages = async (numberOfImages = 10, callBack) => {
  const pokemonsList = await getPokemonsList(numberOfImages);

  const images = await getPokemonSprites(pokemonsList);

  return callBack(images);
};

export default generateRandomPokemonImages;
