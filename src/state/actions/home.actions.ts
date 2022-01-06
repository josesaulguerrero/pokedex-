// global types
import { PokemonBasicDetails } from "../../globalTypes";
// action types
import { Home } from "../actionTypes";

export interface FetchPokemonsRequest {
	type: Home.Types.FETCH_POKEMONS_REQUEST;
	payload: {
		url: string;
	};
}

export interface FetchPokemonSuccess {
	type: Home.Types.FETCH_POKEMONS_SUCCESS;
	payload: {
		pokemons: PokemonBasicDetails[];
	};
}

export interface FetchPokemonsFailed {
	type: Home.Types.FETCH_POKEMONS_FAILED;
}
