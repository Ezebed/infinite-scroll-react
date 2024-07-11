import { useEffect, useState } from "react";

export default function useGetPokemonData(pokeUrl:string)
{
    const [pokeData, setPokeData] = useState()

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

}