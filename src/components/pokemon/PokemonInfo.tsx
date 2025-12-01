import React from "react";
import { Ruler, Weight } from "lucide-react";
import type { PokemonDetail } from "../../types/pokemon";

interface PokemonInfoProps {
  pokemon: PokemonDetail;
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "fire":
      return "bg-red-500";
    case "water":
      return "bg-blue-500";
    case "grass":
      return "bg-green-500";
    case "electric":
      return "bg-yellow-400";
    case "poison":
      return "bg-purple-500";
    case "ground":
      return "bg-yellow-600";
    case "rock":
      return "bg-gray-600";
    case "fairy":
      return "bg-pink-400";
    case "bug":
      return "bg-green-600";
    case "dragon":
      return "bg-indigo-600";
    case "psychic":
      return "bg-pink-600";
    case "flying":
      return "bg-blue-400";
    case "fighting":
      return "bg-orange-700";
    case "ice":
      return "bg-cyan-400";
    case "ghost":
      return "bg-purple-700";
    default:
      return "bg-gray-500";
  }
};

export const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-square max-w-md bg-gray-50 rounded-full flex items-center justify-center mb-8">
        <img
          src={
            pokemon.sprites.other["official-artwork"].front_default ||
            pokemon.sprites.front_default
          }
          alt={pokemon.name}
          className="w-3/4 h-3/4 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className={`px-6 py-1.5 rounded-full text-white text-sm font-bold uppercase tracking-wide shadow-sm ${getTypeColor(
              type.type.name
            )}`}
          >
            {type.type.name}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <div className="text-gray-400 text-sm font-medium mb-1 flex items-center justify-center gap-1">
            <span>
              <Ruler className="w-4 h-4" />
            </span>{" "}
            Height
          </div>
          <div className="text-xl font-bold text-gray-800">
            {pokemon.height / 10} m
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <div className="text-gray-400 text-sm font-medium mb-1 flex items-center justify-center gap-1">
            <span>
              <Weight className="w-4 h-4" />
            </span>{" "}
            Weight
          </div>
          <div className="text-xl font-bold text-gray-800">
            {pokemon.weight / 10} kg
          </div>
        </div>
      </div>
    </div>
  );
};
