import "@/assets/css/App.css"

import HolaMundo from "@/components/hola"

import useGetPokemons from "@/hooks/useGetPokemons"

import { IPokemonEntry } from "./utils/Interfaces/IPokemon"

function App() {

  const {loading, pokemonEntries, hasMore, morePokemons }  = useGetPokemons()

  
  function hola(){
    
    // pokemonEntries.map((x:any) => console.log(x))
    console.log(pokemonEntries)
  }

  return (
    <>
      {pokemonEntries.map((data:IPokemonEntry,index:number) => ( <div key={index} className="px-4 py-2 my-2 text-black bg-slate-500 rounded-sm">{data.name}</div> ))}
      
      <button disabled={loading} onClick={hola}>api</button>
      <button disabled={!hasMore} onClick={morePokemons}>more</button>
      <HolaMundo name='mundo' />
        
    </>
  )
}

export default App
