import { useEffect, useState } from "react";

import { IPokemonData, IType } from "@/utils/Interfaces/IPokemon";
import { IGetPokemonData } from "@/utils/Interfaces/IGetPokemonData";
import { pokeColors } from "@/utils/constants.d";

export default function useGetPokemonData(pokeUrl: string): IGetPokemonData {
  const [pokeData, setPokeData] = useState<IPokemonData>();
  const [pokeName, setPokeName] = useState<string>("");
  const [pokeImg, setPokeImg] = useState<string>("");
  const [pokeColor, setPokeColor] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(pokeUrl);
        const data = await response.json();

        setPokeData(data);
      } catch (error) {
        console.error("error: " + error);
      }
    };
    FetchData();
  }, []);

  useEffect(() => {
    if (pokeData) {
      setPokeName(pokeData.name);
      setPokeImg(pokeData.sprites.front_default);
      let pokeTypes = pokeData.types;
      setTypesColor(pokeTypes);
      setLoading(false);
    }
  }, [pokeData]);

  function setTypesColor(types: IType[]) {
    let firstType: string;
    let secondType: string;
    let firstColor: string;
    let secondColor: string;

    switch (types.length) {
      case 1:
        firstType = types[0].type.name;
        firstColor = pokeColors[firstType as keyof typeof pokeColors];
        setPokeColor(firstColor);
        break;
      case 2:
        if (types[0].slot === 1) {
          firstType = types[0].type.name;
          secondType = types[1].type.name;
        } else {
          firstType = types[1].type.name;
          secondType = types[0].type.name;
        }
        firstColor = pokeColors[firstType as keyof typeof pokeColors];
        secondColor = pokeColors[secondType as keyof typeof pokeColors];
        setPokeColor(
          `linear-gradient(125deg, ${firstColor} 49%, ${secondColor} 51%)`
        );
        break;
      default:
        setPokeColor("#777");
    }
  }

  return {
    pokeName: pokeName,
    pokeImg: pokeImg,
    pokeColor: pokeColor,
    loading: loading,
  };
}
