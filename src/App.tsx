import "@/assets/css/App.css"

import HolaMundo from "@/components/hola"

import useGetPokemons from "@/hooks/useGetPokemons"


function App() {

  const {loading, data}  = useGetPokemons()

  
  function hola(){
    
    data?.results?.map((x:any) => console.log(x))
  }

  return (
    <>
      {data?.results?.map((data) => ( <div key={data.name}>{data.name}</div> ))}
      
      <button disabled={loading} onClick={hola}>api</button>
      <HolaMundo name='mundo' />
        
    </>
  )
}

export default App
