// libraries
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/reducers/index";
import { Pagination } from "../components/Pagination";
import { CardSkeleton } from "../components/CardSkeleton";

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

	return (
		<section className="Home">
			{/* <CardSkeleton /> */}
			<ul>
				{pokemons.map((pokemon) => (
					<li className="Card" key={pokemon.pokedexId}>
						<p>{pokemon.name}</p>
						<img src={pokemon.spriteUrl} alt={`${pokemon.name} sprite`} />
					</li>
				))}
			</ul>
			<Pagination />
		</section>
	);
};
