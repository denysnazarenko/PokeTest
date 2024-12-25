import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../../utils/api.ts";
import PokemonList from "../pokemonList/PokemonList.tsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.ts";
import { Pokemon } from "../../types/pokemon";

const HomePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);

  useEffect(() => {
    fetchPokemons(40, 0).then(setPokemons);
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites(
      favorites.includes(id)
        ? favorites.filter((favId) => favId !== id)
        : [...favorites, id]
    );
  };

  return (
    <div className="container lg mx-auto">
      <h1 className="text-center text-5xl mt-6 mb-9" >Список покемонів</h1>
      <PokemonList
        pokemons={pokemons}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomePage;