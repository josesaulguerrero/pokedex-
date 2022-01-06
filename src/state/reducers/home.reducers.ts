// global types
import { PokemonBasicDetails } from "../../globalTypes";
// action interfaces
import { Action } from "../actions/index";
// action types
import { Home } from "../actionTypes";

interface State {
	loading: boolean;
	error: boolean;
	pokemons: PokemonBasicDetails[];
}

const INITIAL_STATE: State = {
	loading: true,
	error: false,
	pokemons: [],
};

export const reducer = (state = INITIAL_STATE, action: Action): State => {
	switch (action.type) {
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
