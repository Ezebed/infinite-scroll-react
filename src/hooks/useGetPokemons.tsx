import { useEffect, useState } from "react";

import { apiUrl } from "@/utils/constants.d"

interface IApiData {
  count:number,
  next:string | null,
  previous:string | null,
  results: {
    name:string,
    url:string
  }[]
}

interface IGetPokemons {
  data:IApiData | undefined,
  loading: boolean
}

export default function useGetPokemons():IGetPokemons
{
  const [apiData, setApiData] = useState<IApiData>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(apiUrl);
        const data = await response.json();
        setApiData(data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

  },[])

  return {
    data: apiData,
    loading
  }
}