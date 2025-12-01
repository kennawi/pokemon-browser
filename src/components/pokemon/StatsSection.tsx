import React from "react";
import { StatBar } from "./StatBar";
import type { PokemonStat } from "../../types/pokemon";

interface StatsSectionProps {
  stats: PokemonStat[];
}

const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
  speed: "Speed",
};

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Base Stats</h2>
      <div className="space-y-4">
        {stats.map((stat) => (
          <StatBar
            key={stat.stat.name}
            label={STAT_LABELS[stat.stat.name] || stat.stat.name}
            value={stat.base_stat}
          />
        ))}
      </div>
    </div>
  );
};
