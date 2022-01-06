import { Home } from "../actionTypes";

export interface FetchPokemonsRequest {
	type: Home.Types.FETCH_POKEMONS_REQUEST;
	payload: {
		url: string;
	};
}
