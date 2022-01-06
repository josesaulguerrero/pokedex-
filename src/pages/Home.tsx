// libraries
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/reducers/index";
import { Pagination } from "../components/Pagination";

export const Home: FC = () => {
	const dispatch = useDispatch();
	const state = useSelector((state: AppState) => state.home);
	const { error, loading, pokemons } = state;

	useEffect(() => {
		dispatch({
			type: "FETCH_POKEMONS_REQUEST",
			payload: {
				url: "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0",
			},
		});
	}, []);

	return (
		<section className="Home">
			<Pagination />
		</section>
	);
};
