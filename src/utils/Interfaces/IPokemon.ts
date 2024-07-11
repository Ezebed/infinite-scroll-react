export interface IPokemonsResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: IPokemonEntry[]
}

export interface IPokemonEntry {
    name: string,
    url: string
}
  
