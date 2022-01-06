import * as homeActions from "./home.actions";

export type Action =
	| homeActions.FetchPokemonsRequest
	| homeActions.FetchPokemonSuccess
	| homeActions.FetchPokemonsFailed;
