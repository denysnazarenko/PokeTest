const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemons = async (limit: number, offset: number) => {
  const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
  const data = await response.json();

  return Promise.all(
    data.results.map(async (pokemon: any) => {
      const details = await fetch(pokemon.url).then((res) => res.json());
      return {
        id: details.id,
        name: details.name,
        image: details.sprites.front_default,
        types: details.types.map((type: any) => type.type.name),
      };
    })
  );
};