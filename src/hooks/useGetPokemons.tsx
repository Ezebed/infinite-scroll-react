import { useEffect, useState } from "react";

import { apiUrl } from "@/utils/constants.d";

import { IPokemonEntry, IPokemonsResponse } from "@/utils/Interfaces/IPokemon";
import { IGetPokemons } from "@/utils/Interfaces/IGetPokemons";

export default function useGetPokemons(): IGetPokemons {
  const [apiData, setApiData] = useState<IPokemonsResponse>();
  const [pokeApi, setPokeApi] = useState<string>(apiUrl);
  const [pokemonEntries, setPokemonEntries] = useState<IPokemonEntry[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(pokeApi);
        const data = await response.json();

        setApiData(data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [pokeApi]);

  useEffect(() => {
    if (apiData) {
      setPokemonEntries([...pokemonEntries, ...apiData.results]);
      setHasMore(apiData.next !== null);
    }
  }, [apiData]);

  function morePokemons() {
    if (hasMore && apiData) {
      setPokeApi(apiData.next!);
    }
  }

  return {
    pokemonEntries,
    hasMore,
    loading,
    morePokemons,
  };
}
