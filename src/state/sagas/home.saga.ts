// libraries
import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
// action data type
import { FetchPokemonsRequest } from "../actions/home.actions";
// action types
import { Home } from "../actionTypes";
// global types
import { HomeBasicAPIResponse, PokemonBasicDetails } from "../../globalTypes";

const getNormalizedData = ({ data }: AxiosResponse) => {
	let promises = data.results.map((item: HomeBasicAPIResponse) => {
		return axios
			.get(item.url)
			.then((response) => response.data)
			.then(
				(response): PokemonBasicDetails => ({
					name: response.name,
					pokedexId: response.id,
					spriteUrl:
						response.sprites.other["official-artwork"].front_default ||
						response.sprites.front_default,
					types: [
						response.types[0]?.type.name,
						response.types[1]?.type.name,
					],
				})
			)
			.catch((error) => {
				throw new Error(error);
			});
	});
	return Promise.all(promises);
};

function* fetchPokemons(action: FetchPokemonsRequest) {
	try {
		const data: AxiosResponse = yield call(axios.get, action.payload.url);
		let normalizedData: PokemonBasicDetails[] = yield getNormalizedData(data);
		yield put({
			type: Home.Types.FETCH_POKEMONS_SUCCESS,
			payload: { pokemons: normalizedData },
		});
	} catch (error) {
		yield put({ type: Home.Types.FETCH_POKEMONS_FAILED });
	}
}

export function* saga() {
	yield takeEvery(Home.Types.FETCH_POKEMONS_REQUEST, fetchPokemons);
}
