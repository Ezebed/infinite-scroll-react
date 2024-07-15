import useGetPokemonData from "@/hooks/useGetPokemonData";
import { IPokemonEntry } from "@/utils/Interfaces/IPokemon";


export default function PokeCard({name, url}:IPokemonEntry){
    const { pokeImg, pokeColor, loading } = useGetPokemonData(url)
    
    const altDescription = `${name}_alt`
    const figureClass = 'px-4 py-2 text-black rounded-sm '

    return(
        <>
            {
                loading ?
                <PokeCardSkelleton/> :
                <figure className={figureClass} style={{background: pokeColor}}>
                    <img src={pokeImg} alt={altDescription} className="size-[10rem]" />
                    <span className="font-bold capitalize">{name}</span>
                </figure>
            }
        </>
    )
}

export function PokeCardSkelleton(){
    return(
        <div className="px-4 py-2 flex flex-col gap-1 items-center rounded-sm animate-pulse bg-slate-700" >
            <div className="w-[10rem] h-[10rem] rounded-lg bg-slate-800"></div>
            <div className="w-[50%] h-5 rounded-lg bg-slate-800"></div>
        </div>
    )
}