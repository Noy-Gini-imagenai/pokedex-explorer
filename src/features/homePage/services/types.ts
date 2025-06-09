export interface Pokemon {
    id: number;
    name: string;
    image?: string;
}

export interface PokemonResponse {
    results: Pokemon[];
    count: number;
}