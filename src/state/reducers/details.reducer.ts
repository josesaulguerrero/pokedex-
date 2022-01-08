// global types
import { PokemonDetailedInfo } from "../../globalTypes";
// action type
import { DetailsAction } from "../actions";
// actionTypes
import { Details } from "../actionTypes";

interface State {
	loading: boolean;
	error: boolean;
	pokemonInfo: PokemonDetailedInfo | null;
}

const INITIAL_STATE: State = {
	loading: false,
	error: false,
	pokemonInfo: null,
};

export const reducer = (
	state = INITIAL_STATE,
	action: DetailsAction
): State => {
	switch (action.type) {
		case Details.Types.FETCH_POKEMON_REQUEST:
			return {
				...state,
				loading: true,
				error: false,
			};
		case Details.Types.FETCH_POKEMON_SUCCESS:
			return {
				...state,
				pokemonInfo: action.payload.pokemonDetails,
				loading: false,
				error: false,
			};
		case Details.Types.FETCH_POKEMON_FAILED:
			return {
				...state,
				error: true,
				loading: false,
				pokemonInfo: null,
			};
		default:
			return state;
	}
};
