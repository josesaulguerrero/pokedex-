// libraries
import { takeEvery } from "redux-saga/effects";
// action types
import { Home } from "../actionTypes";

const fetchPokemons = () => {
	const URL = process.env.REACT_APP_BASE_API;
	console.log(URL);
};

export function* saga() {
	yield takeEvery(Home.Types.FETCH_POKEMONS_REQUEST, fetchPokemons);
}
