import axios from "axios";
import { LIMIT, POKEMON_BASE_URL, POKEMON_IMAGE_URL } from "./consts";
import type { Pokemon, PokemonResponse } from "./types";

export async function getPokemons(currPage: number = 0, limit: number = LIMIT): Promise<PokemonResponse> {
    const offset = currPage * limit;

    try {
        const response = await axios.get(`${POKEMON_BASE_URL}?offset=${offset}&limit=${limit}`);

        if (!response?.data) throw new Error('No data received from the API');

        const pokemonsList = response.data.results.map((pokemon: Pokemon, index: number) => {
            const id = offset + index + 1;
            return {
                ...pokemon,
                id,
                image: `${POKEMON_IMAGE_URL}/${id}.png`
            };
        });

        return {
            results: pokemonsList,
            count: response.data.count
        };
    } catch (error) {
        console.error('Error fetching pokemons:', error);
        return {
            results: [],
            count: 0
        };
    }
}

export async function getPokemonDetails(id: number) {
    try {
        const response = await axios.get(`${POKEMON_BASE_URL}/${id}`);
        if (!response?.data) throw new Error('No data received from the API');

        return response.data;
    } catch (error) {
        console.error('Error fetching pokemon details:', error);
        return null;
    }
}