import axios from "axios";
import type { PokemonListResponse, PokemonDetail } from "../types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchPokemonList = async (
  limit: number = 20,
  offset: number = 0
): Promise<PokemonListResponse> => {
  const response = await api.get<PokemonListResponse>(`/pokemon`, {
    params: { limit, offset },
  });
  return response.data;
};

export const fetchPokemonDetail = async (
  id: string | number
): Promise<PokemonDetail> => {
  const response = await api.get<PokemonDetail>(`/pokemon/${id}`);
  return response.data;
};

export const fetchPokemonByUrl = async (
  url: string
): Promise<PokemonDetail> => {
  const response = await axios.get<PokemonDetail>(url);
  return response.data;
};
