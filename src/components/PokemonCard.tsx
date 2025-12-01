import React from "react";
import { Link } from "react-router-dom";
import type { PokemonSummary } from "../types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonSummary;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  console.log("pokemon", pokemon);
  const id = pokemon.url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Link
      to={`/pokemon/${id}`}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center group border border-white hover:border-blue-50"
    >
      <div className="w-full h-full mb-6 relative bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
        <img
          src={imageUrl}
          alt={pokemon.name}
          className="w-full h-full object-contain drop-shadow-md"
          loading="lazy"
        />
      </div>
      <div className="text-center w-full">
        <h3 className="text-lg font-bold capitalize mb-1 text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors">
          {pokemon.name}
        </h3>
        <span className="text-gray-400 text-xs font-bold tracking-wider font-mono">
          #{String(id)}
        </span>
      </div>
    </Link>
  );
};

export default PokemonCard;
