import "@/assets/css/App.css"
import { useEffect, useRef } from "react"

import HolaMundo from "@/components/hola"

import useGetPokemons from "@/hooks/useGetPokemons"

import { IPokemonEntry } from "./utils/Interfaces/IPokemon"

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
  

  // function loadMore()
  // {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach((entry) => {
  //       if(entry.isIntersecting)
  //       {
  //         morePokemons()
  //       }
  //     })
  //   })
  // }

  return (
    <>
      {pokemonEntries.map((data:IPokemonEntry,index:number) => ( <div key={index} className="px-4 py-2 my-2 text-black bg-slate-500 rounded-sm">{data.name}</div> ))}
      
      <button disabled={loading} onClick={hola}>api</button>
      <button disabled={!hasMore} onClick={morePokemons}>more</button>
      <div ref={loadRef} className="px-4 py-2 my-2 bg-lime-500" >loading...</div>
      <HolaMundo name='mundo' />
        
    </>
  )
}

export default App
