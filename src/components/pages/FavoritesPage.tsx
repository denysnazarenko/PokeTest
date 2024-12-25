import React, { useEffect, useState } from "react";
import PokemonList from "../pokemonList/PokemonList.tsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.ts";
import { Pokemon } from "../../types/pokemon";
import { fetchPokemonById } from "../../utils/pokemonsById.ts";

interface FavoritesPageProps {
  pokemons: Pokemon[];
}

const FavoritesPage: React.FC<FavoritesPageProps> = () => {
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);

  const fetchPokemonsByIds = async (ids: number[]) => {
    const pokemonPromises = ids.map(id => fetchPokemonById(id));
    const pokemons = await Promise.all(pokemonPromises);
    setFavoritePokemons(pokemons);
  };

  useEffect(() => {
    if (favorites.length > 0) {
      fetchPokemonsByIds(favorites);
    } else {
      setFavoritePokemons([]);
    }
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites(
      favorites.includes(id)
        ? favorites.filter((favId) => favId !== id)
        : [...favorites, id]
    );
  };

  return (
    <div className="container lg mx-auto">
      <h1 className="text-3xl font-bold text-center mt-6 mb-5">Улюблені покемони</h1>
      <PokemonList
        pokemons={favoritePokemons}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default FavoritesPage;