// libraries
import { put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
// actionTypes
import { Details } from "../actionTypes";
// action type
import { FetchPokemonRequest } from "../actions/details.actions";
// global types
import {
	PokemonBasicDetails,
	PokemonDetailedInfo,
	PokemonSpecies,
	PokemonType,
} from "../../globalTypes";

const getPokemonFurtherDetails = (pokemonName: string) => {
	return axios
		.get(`${process.env.REACT_APP_BASE_API}/pokemon-species/${pokemonName}`)
		.then((response) => {
			return {
				description: (
					response.data.flavor_text_entries[0].flavor_text as string
				).replaceAll(/\n|\f/gi, " "),
				shape: response.data.shape.name,
				evolutionChainUrl: response.data.evolution_chain.url,
			};
		})
		.catch((error) => {
			throw new Error(error);
		});
};

const getPokemonBasicDetails = (pokemonName: string) => {
	return axios
		.get(`${process.env.REACT_APP_BASE_API}/pokemon/${pokemonName}`)
		.then(
			(response): PokemonBasicDetails => ({
				name: response.data.name,
				pokedexId: response.data.id,
				spriteUrl:
					response.data.sprites.other["official-artwork"].front_default ||
					response.data.sprites.front_default,
				types: response.data.types.map((item: PokemonType) => {
					return item.type.name;
				}),
			})
		)
		.catch((error) => {
			throw new Error(error);
		});
};

const getEvolutionChain = (URL: string) => {
	return axios
		.get(URL)
		.then((response) => response.data)
		.then((response) => {
			let chain = response.chain;
			let chainNames = [];
			while (true) {
				//this returns the pokemon names present in the evolution chain.
				if (chain.evolves_to.length > 0) {
					chainNames.push(chain.species.name);
					chain = chain.evolves_to[0];
				} else {
					chainNames.push(chain.species.name);
					break;
				}
			}
			return chainNames;
		})
		.then((response) => {
			// and this section fetches the needed data for every single pokemon in the evolution chain.
			const promises = response.map((name: string) =>
				axios
					.get(`${process.env.REACT_APP_BASE_API}/pokemon/${name}`)
					.then((response) => ({
						name: response.data.name,
						spriteUrl:
							response.data.sprites.other["official-artwork"]
								.front_default || response.data.sprites.front_default,
					}))
					.catch((error) => {
						throw new Error(error);
					})
			);
			return Promise.all(promises);
		})
		.catch((error) => {
			throw new Error(error);
		});
};

function* getAllData(pokemonName: string) {
	//sadly, this API doesn't retrieves all the necessary information in only one endpoint, so I had to make several calls to get everything i needed :(
	// if someone is reading this, good luck understanding it :p
	const PokemonBasicDetails: PokemonBasicDetails =
		yield getPokemonBasicDetails(pokemonName);
	const pokemonFurtherDetails: PokemonSpecies = yield getPokemonFurtherDetails(
		pokemonName
	);
	const evolutionChain: AxiosResponse = yield getEvolutionChain(
		pokemonFurtherDetails.evolutionChainUrl
	);
	return {
		...PokemonBasicDetails,
		...pokemonFurtherDetails,
		evolutionChain,
	};
}

function* fetchPokemonData(action: FetchPokemonRequest) {
	try {
		const data: PokemonDetailedInfo = yield getAllData(
			action.payload.pokemonName
		);
		yield put({
			type: Details.Types.FETCH_POKEMON_SUCCESS,
			payload: {
				pokemonDetails: data,
			},
		});
	} catch (error) {
		yield put({ type: Details.Types.FETCH_POKEMON_FAILED });
	}
}

export function* saga() {
	yield takeEvery(Details.Types.FETCH_POKEMON_REQUEST, fetchPokemonData);
}
