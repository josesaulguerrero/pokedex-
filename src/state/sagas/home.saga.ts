// libraries
import { call, put, takeEvery } from "redux-saga/effects";
// action data type
// import { Action } from "../actions";
import { FetchPokemonsRequest } from "../actions/home.actions";
// action types
import { Home } from "../actionTypes";
import axios, { AxiosResponse } from "axios";

function* fetchPokemons(action: FetchPokemonsRequest) {
	try {
		const data: AxiosResponse = yield call(axios.get, action.payload.url);
		yield console.log(data.data);
	} catch (error) {
		yield put({ type: Home.Types.FETCH_POKEMONS_FAILED });
	}
}

export function* saga() {
	yield takeEvery(Home.Types.FETCH_POKEMONS_REQUEST, fetchPokemons);
}
