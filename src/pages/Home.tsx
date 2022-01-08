/* eslint-disable react-hooks/exhaustive-deps */
// libraries
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// types
import { AppState } from "../state/reducers/index";
import { PokemonBasicDetails } from "../globalTypes";
// components
import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
// styles
import "../styles/Home.css";

export const Home: FC = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const state = useSelector((state: AppState) => state.home);
	const { error, loading, pokemons } = state;

	useEffect(() => {
		console.log(params);
		dispatch({
			type: "FETCH_POKEMONS_REQUEST",
			payload: {
				url: `${process.env.REACT_APP_BASE_API}/pokemon/?limit=20&offset=${
					parseInt(params.pageNumber as string) * 20
				}`,
			},
		});
	}, [params.pageNumber]);

	if (error || pokemons.length === 0)
		return <p>sorry... Something went wrong :(</p>;

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
			loading={loading}
		/>
	);

	return (
		<section className="Home">
			<ul className="CardsSection">{pokemons.map(renderCards)}</ul>
			<Pagination />
		</section>
	);
};
