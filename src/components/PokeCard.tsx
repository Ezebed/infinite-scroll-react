import useGetPokemonData from "@/hooks/useGetPokemonData";
import { IPokemonEntry } from "@/utils/Interfaces/IPokemon";

export default function PokeCard({name, url}:IPokemonEntry){
    // const {} = useGetPokemonData(url)

    return(
        <figure>
            {name}
        </figure>
    )
}