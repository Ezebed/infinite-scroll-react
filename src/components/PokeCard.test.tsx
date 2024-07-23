import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { IPokemonEntry } from "@/utils/Interfaces/IPokemon";

import PokeCard from "./PokeCard";

const pokeData: IPokemonEntry = {
  name: "pikachu",
  url: "https://pokeapi.co/api/v2/pokemon/pikachu",
};

describe("Pokemon card Component", () => {
  beforeEach(() => {
    render(<PokeCard {...pokeData} />);
  });

  test("true is true", () => {
    expect(true).toBeTruthy();
  });

  test("component is renderer", async () => {
    let component = await screen.findByText(/pikachu/i);

    expect(component).toBeDefined();
  });
});
