import { IPokemonEntry } from "./IPokemon"

export interface IGetPokemons {
    pokemonEntries: IPokemonEntry[],
    hasMore: boolean,
    loading: boolean,
    morePokemons: () => void
}