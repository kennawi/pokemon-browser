import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "../api/pokemonApi";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { PokemonHeader } from "../components/pokemon/PokemonHeader";
import { PokemonInfo } from "../components/pokemon/PokemonInfo";
import { StatsSection } from "../components/pokemon/StatsSection";
import { AbilitiesSection } from "../components/pokemon/AbilitiesSection";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: pokemon,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemonDetail(id!),
    enabled: !!id,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage message={error?.message} />;
  if (!pokemon) return <div className="text-center p-8">Pokémon not found</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2 font-medium border border-gray-200"
      >
        <span className="text-xl leading-none">←</span> Back to List
      </button>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <PokemonHeader name={pokemon.name} id={pokemon.id} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Left Column: Image & Basic Info */}
          <PokemonInfo pokemon={pokemon} />

          {/* Right Column: Stats & Abilities */}
          <div className="py-4">
            <StatsSection stats={pokemon.stats} />
            <AbilitiesSection abilities={pokemon.abilities} />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Base Experience
              </h2>
              <div className="text-3xl font-bold text-purple-600">
                {pokemon.base_experience}{" "}
                <span className="text-lg text-purple-400 font-medium">XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
