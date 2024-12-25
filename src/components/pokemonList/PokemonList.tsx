import React from "react";
import PokemonCard from "../pokemonCard/PokemonCard.tsx";
import { Pokemon } from "../../types/pokemon.ts";

interface PokemonListProps {
  pokemons: Pokemon[];
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, favorites, toggleFavorite }) => {
  return (
    <div className="pokemon-list grid grid-cols-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isFavorite={favorites.includes(pokemon.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default PokemonList;