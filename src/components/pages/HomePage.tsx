import React, { useState, useEffect, useRef, useCallback } from "react";
import { fetchPokemons } from "../../utils/api.ts";
import PokemonList from "../pokemonList/PokemonList.tsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.ts";
import { Pokemon } from "../../types/pokemon";

const HomePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadPokemons = useCallback(async () => {
    setLoading(true);
    const newPokemons = await fetchPokemons(20, page * 20);
    setPokemons((prev) => [...prev, ...newPokemons]);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.current.observe(observerRef.current);
    }
  }, [pokemons]);

  const toggleFavorite = (id: number) => {
    setFavorites(
      favorites.includes(id)
        ? favorites.filter((favId) => favId !== id)
        : [...favorites, id]
    );
  };

  return (
    <div className="container lg mx-auto">
      <h1 className="text-3xl font-bold text-center mt-6 mb-5">Список покемонів</h1>
      <PokemonList
        pokemons={pokemons}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <div ref={observerRef} className="h-4"></div>
      {loading && <p className="text-center">Завантаження...</p>}
    </div>
  );
};

export default HomePage;
