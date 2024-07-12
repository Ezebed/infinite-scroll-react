import { useEffect, useState } from "react";

import { IPokemonData } from "@/utils/Interfaces/IPokemon";
import { IGetPokemonData } from "@/utils/Interfaces/IGetPokemonData";


export default function useGetPokemonData(pokeUrl:string): IGetPokemonData
{
    const [pokeData, setPokeData] = useState<IPokemonData>()

    useEffect(() => {
        const FetchData = async () => {
            try{
                const response = await fetch(pokeUrl)
                const data = await response.json()

                setPokeData(data)
            }catch(error){
                console.error("error: "+error)
            }
        }
        FetchData()
    },[])

    return {
        pokeName: "",
        pokeImg: ""
    }    

}