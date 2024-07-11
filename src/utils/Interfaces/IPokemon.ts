export interface IPokemonsResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: IPokemonEntry[]
}

export interface IPokemonEntry {
    name: string,
    url: string
}

export interface IPokeAbilities {
    habilities: {
        hability: IPokemonEntry,
        is_hidden: boolean,
        slot: number,
    }
}

export interface ICries {
    latest: string,
    legacy: string
}

// game details

export interface IGameIndice {
    game_index: number,
    version: IPokemonEntry
}

export interface IVersionGroupDetail {
    level_learnet_at: number,
    move_learn_method: IPokemonEntry,
    version_group: IPokemonEntry
}

export interface Imoves {
    move: IPokemonEntry,
    version_group_details: IVersionGroupDetail[]
}

// sprites

export interface ISprites {
    back_default?: string,
    back_female?: string,
    back_shiny?: string,
    back_shiny_female?: string,
    back_gray?: string,
    back_transparent?: string,
    back_shiny_transparent?: string,
    front_default: string,
    front_female?: string,
    front_shiny?: string,
    front_shiny_female?: string,
    front_gray?: string,
    front_transparent?: string,
    front_shiny_transparent?: string,
    other?: IOtherSprite,
    versions?: IVersionsSprite,
    animated?: ISprites
}

// Other Spite

export interface IOtherSprite {
    dream_world: IDreamWorld,
    home: IHome,
    "official-artwork": IOfficialArtwork,
    showdown: ISprites

}

export interface IDreamWorld {
    front_default: string,
    front_female: string
}

export interface IHome {
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
}

export interface IOfficialArtwork {
    front_default: string,
    front_shiny: string
}

// Version Sprite

export interface IVersionsSprite {
    "generation-i": IGenerationI,
    "generation-ii": IGenerationIi,
    "generation-iii": IGenerationIii,
    "generation-iv": IGenerationIv,
    "generation-v": IGenerationV,
    "generation-vi": IGenerationVi,
    "generation-vii": IGenerationVii,
    "generation-viii": IGenerationViii
}

// generation Sprite

export interface IGenerationI {
    "red-blue": ISprites,
    yellow: ISprites
}

export interface IGenerationIi {
    crystal: ISprites,
    gold: ISprites,
    silver: ISprites
}

export interface IGenerationIii {
    emerald: ISprites,
    "firered-leafgreen": ISprites,
    "ruby-sapphire": ISprites
}

export interface IGenerationIv {
    "diamond-pearl": ISprites,
    "heartgold-soulsilver": ISprites,
    platinum: ISprites
}

export interface IGenerationV {
    "black-white": ISprites
}

export interface IGenerationVi {
    "omegaruby-alphasapphire": ISprites,
    "x-y": ISprites
}

export interface IGenerationVii {
    icons: ISprites,
    "ultra-sun-ultra-moon": ISprites
}

export interface IGenerationViii {
    icons: ISprites
}

// stats

export interface Istats {
    base_stat: number,
    effort: number,
    stat: IPokemonEntry
}

// types

export interface IType {
    slot: number,
    type: IPokemonEntry
}

export interface IPokemonData {
    abilities: IPokeAbilities[],
    base_experiencie: number,
    cries: ICries,
    forms: IPokemonEntry[],
    game_indices: IGameIndice[],
    height: number,
    held_items: any[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: Imoves[],
    name: string,
    order: string,
    past_abilities: any[],
    past_types: any[],
    species: IPokemonEntry,
    sprites: ISprites,
    stats: Istats[],
    types: IType[],
    weight: number
}
