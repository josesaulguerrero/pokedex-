import * as homeActions from "./home.actions";
import * as detailsActions from "./details.actions";

export type HomeAction =
	| homeActions.FetchPokemonsRequest
	| homeActions.FetchPokemonSuccess
	| homeActions.FetchPokemonsFailed;

export type DetailsAction =
	| detailsActions.FetchPokemonRequest
	| detailsActions.FetchPokemonSuccess
	| detailsActions.FetchPokemonFailed;
