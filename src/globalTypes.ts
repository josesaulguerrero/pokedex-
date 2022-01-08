export interface BasicAPIResponse {
	name: string;
	url: string;
}

export interface PokemonType {
	type: { name: string };
}

export interface PokemonBasicDetails {
	spriteUrl: string;
	pokedexId: number | string;
	name: string;
	types: string[];
}

export interface PokemonDetailedInfo extends PokemonBasicDetails {
	description: string;
	shape: string;
	evolutionChain: {
		name: string;
		spriteUrl: string;
	}[];
	evolutionChainUrl: string;
}

export interface PokemonSpecies {
	description: string;
	shape: string;
	evolutionChainUrl: string;
}
