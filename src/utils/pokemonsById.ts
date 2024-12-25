const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonById = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`);
  const details = await response.json();

  return {
    id: details.id,
    name: details.name,
    image: details.sprites.front_default,
    types: details.types.map((type: any) => type.type.name),
  };
};