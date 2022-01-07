// libraries
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// types
import { AppState } from "../state/reducers/index";
import { PokemonBasicDetails } from "../globalTypes";
// components
import { Card } from "../components/Card";
// styles
import "../styles/Home.css";

export const Home: FC = () => {
	const dispatch = useDispatch();
	const state = useSelector((state: AppState) => state.home);
	const { error, loading, pokemons } = state;

	useEffect(() => {
		dispatch({
			type: "FETCH_POKEMONS_REQUEST",
			payload: {
				url: `${process.env.REACT_APP_BASE_API}/pokemon/?limit=20&offset=0`,
			},
		});
	}, []);

	if (loading) return <p>loading...</p>;
	if (error) return <p>sorry... Something went wrong :(</p>;

	const renderCards = ({
		name,
		pokedexId,
		spriteUrl,
		types,
	}: PokemonBasicDetails) => (
		<Card
			key={pokedexId}
			name={name}
			pokedexId={pokedexId}
			spriteUrl={spriteUrl}
			types={types}
		/>
	);

	return (
		<section className="Home">
			<ul className="CardsSection">{pokemons.map(renderCards)}</ul>
		</section>
	);
};
