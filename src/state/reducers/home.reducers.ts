// global types
import { PokemonBasicDetails } from "../../globalTypes";
// action type
import { HomeAction } from "../actions/index";
// action types
import { Home } from "../actionTypes";

interface State {
	loading: boolean;
	error: boolean;
	pokemons: PokemonBasicDetails[];
}

const INITIAL_STATE: State = {
	loading: false,
	error: false,
	pokemons: [],
};

export const reducer = (state = INITIAL_STATE, action: HomeAction): State => {
	switch (action.type) {
		case Home.Types.FETCH_POKEMONS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case Home.Types.FETCH_POKEMONS_SUCCESS:
			return {
				...state,
				loading: false,
				pokemons: action.payload.pokemons,
			};
		case Home.Types.FETCH_POKEMONS_FAILED:
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};
