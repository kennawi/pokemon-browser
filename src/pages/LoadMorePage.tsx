import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../api/pokemonApi";
import PokemonCard from "../components/PokemonCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const PAGE_SIZE = 20;

const LoadMorePage: React.FC = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["pokemonListInfinite"],
    queryFn: ({ pageParam = 0 }) => fetchPokemonList(PAGE_SIZE, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) return undefined;
      return allPages.length * PAGE_SIZE;
    },
  });

  if (status === "pending") return <LoadingSpinner />;
  if (status === "error") return <ErrorMessage message={error?.message} />;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 mt-12 mb-8">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="px-8 py-3 bg-gray-900 text-white cursor-pointer text-sm font-bold rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {isFetchingNextPage
            ? "Loading..."
            : hasNextPage
            ? "Load More Pokémon"
            : "All Pokémon Loaded"}
        </button>

        {isFetching && !isFetchingNextPage && (
          <span className="text-xs text-gray-400 font-medium animate-pulse">
            Updating list...
          </span>
        )}
      </div>
    </div>
  );
};

export default LoadMorePage;
