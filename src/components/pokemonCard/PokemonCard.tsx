import React from "react";
import { Pokemon } from "../../types/pokemon.ts";

import heart from "../../resources/img/heart.png";
import heartActive from "../../resources/img/heartActive.png";

interface PokemonCardProps {
  pokemon: Pokemon;
  isFavorite: boolean;
  toggleFavorite: (id: number) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, isFavorite, toggleFavorite }) => {
  return (
    <div className="flex items-center justify-evenly border p-4 m-2 rounded-lg shadow-md">
      <img src={pokemon.image} alt={pokemon.name} className="object-cover rounded-t-lg" />
      <div>
        <h3 className="text-lg font-semibold mt-2">{pokemon.name}</h3>
        <p className="text-sm text-gray-500">Types: {pokemon.types.join(", ")}</p>
        <button
          className={`mt-2 ${isFavorite ? "text-red-500" : "text-gray-500"}`}
          onClick={() => toggleFavorite(pokemon.id)}
        >
          <img className="w-4" src={isFavorite ? heartActive : heart} alt="heart" />

        </button>
      </div>
    </div>
  );
};

export default PokemonCard;