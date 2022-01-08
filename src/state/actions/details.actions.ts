// action types
import { Details } from "../actionTypes";
// global types
import { PokemonDetailedInfo } from "../../globalTypes";

export interface FetchPokemonRequest {
	type: Details.Types.FETCH_POKEMON_REQUEST;
	payload: {
		pokemonName: string;
	};
}

export interface FetchPokemonSuccess {
	type: Details.Types.FETCH_POKEMON_SUCCESS;
	payload: {
		pokemonDetails: PokemonDetailedInfo;
	};
}

export interface FetchPokemonFailed {
	type: Details.Types.FETCH_POKEMON_FAILED;
}
