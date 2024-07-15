import "@/assets/css/App.css"
import { useEffect, useRef } from "react"

import HolaMundo from "@/components/hola"

import useGetPokemons from "@/hooks/useGetPokemons"

import { IPokemonEntry } from "./utils/Interfaces/IPokemon"
import PokeCard from "./components/PokeCard"

function App() {

  const {loading, pokemonEntries, hasMore, morePokemons }  = useGetPokemons()
  const loadRef = useRef<HTMLDivElement>(null)

  
  function hola(){
    
    console.log(pokemonEntries)
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting){
        morePokemons()
      }
    })

    if(loadRef.current){
      observer.observe(loadRef.current)
    }

    return () => {
      if(loadRef.current){
        observer.unobserve(loadRef.current)
      }
    }
  },[morePokemons])
  
  return (
    <>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2"> 
        {pokemonEntries.map((data:IPokemonEntry,index:number) => ( <PokeCard key={index} {...data} /> ))}
        
      </div>
      
      <button disabled={loading} onClick={hola}>api</button>
      <button disabled={!hasMore} onClick={morePokemons}>more</button>
      { hasMore && <div ref={loadRef} className="px-4 py-2 my-2 bg-lime-500" >loading...</div> }
      <HolaMundo name='mundo' />
        
    </>
  )
}

export default App
