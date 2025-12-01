import React from "react";

interface PokemonHeaderProps {
  name: string;
  id: number;
}

export const PokemonHeader: React.FC<PokemonHeaderProps> = ({ name, id }) => {
  return (
    <div className="bg-linear-to-r from-[#A855F7] to-[#EC4899] p-8 text-center relative">
      <div className="text-white">
        <h1 className="text-4xl font-bold capitalize mb-2 flex items-center justify-center gap-2">
          <span className="text-2xl opacity-80">⚡</span> {name}
        </h1>
        <p className="text-white/80 font-mono">
          #{String(id).padStart(3, "0")}
        </p>
      </div>
    </div>
  );
};
