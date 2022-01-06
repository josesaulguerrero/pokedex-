export interface HomeBasicAPIResponse {
	name: string;
	url: string;
}

export interface PokemonBasicDetails {
	spriteUrl: string;
	pokedexId: number | string;
	name: string;
	types: string[];
}
