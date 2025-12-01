import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../api/pokemonApi";
import PokemonCard from "../components/PokemonCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { PaginationControls } from "../components/pagination/PaginationControls";

const PAGE_SIZE = 20;

const PaginationPage: React.FC = () => {
  const [page, setPage] = useState(1); // Changed to 1-based index for easier handling with the hook

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemonList", page],
    queryFn: () => fetchPokemonList(PAGE_SIZE, (page - 1) * PAGE_SIZE),
    placeholderData: (previousData) => previousData,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage message={error?.message} />;

  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {data?.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      {data?.count && (
        <PaginationControls
          currentPage={page}
          totalCount={data.count}
          pageSize={PAGE_SIZE}
          onPageChange={(newPage) => setPage(newPage)}
        />
      )}
    </div>
  );
};

export default PaginationPage;
