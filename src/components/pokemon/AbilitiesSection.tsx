import React from "react";
import type { PokemonAbility } from "../../types/pokemon";

interface AbilitiesSectionProps {
  abilities: PokemonAbility[];
}

export const AbilitiesSection: React.FC<AbilitiesSectionProps> = ({
  abilities,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Abilities</h2>
      <div className="flex flex-wrap gap-3">
        {abilities.map((ability) => (
          <span
            key={ability.ability.name}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize border
              ${
                ability.is_hidden
                  ? "bg-gray-50 text-gray-500 border-gray-200"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
          >
            {ability.ability.name}
            {ability.is_hidden && (
              <span className="text-xs ml-1 opacity-70">(Hidden)</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
