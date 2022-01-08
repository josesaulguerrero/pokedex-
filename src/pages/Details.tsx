/* eslint-disable react-hooks/exhaustive-deps */
// libraries and hooks
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// app state type
import { AppState } from "../state/reducers";
// action types
import { Details as detailsTypes } from "../state/actionTypes/index";

export const Details: FC = () => {
	const { pokemonName } = useParams();
	const dispatch = useDispatch();
	const { error, loading, pokemonInfo } = useSelector(
		(state: AppState) => state.details
	);

	useEffect(() => {
		dispatch({
			type: detailsTypes.Types.FETCH_POKEMON_REQUEST,
			payload: {
				pokemonName,
			},
		});
	}, [pokemonName]);

	const renderPokemonTypes = (type: string, index: number): JSX.Element => (
		<span key={index}>{type}</span>
	);

	const renderEvolutionChain = (
		name: string,
		spriteUrl: string
	): JSX.Element => (
		<article>
			<Link to={`/details/${name}`}>
				<img src={spriteUrl} alt={`${name} sprite`} />
			</Link>
		</article>
	);

	if (loading) return <p>loading...</p>;
	if (error)
		return (
			<p>{`we're so sorry, it seems like there's no enough information about this pokemon...`}</p>
		);

	return (
		<section className="DetailsSection">
			<figure className="DetailsImage">
				<img
					src={pokemonInfo?.spriteUrl}
					alt={`${pokemonInfo?.name} sprite`}
				/>
			</figure>
			<section className="DetailsBody">
				<h2>{pokemonInfo?.name}</h2>
				<h4>Types</h4>
				{pokemonInfo?.types.map(renderPokemonTypes)}
				<h4>Description</h4>
				<p>{pokemonInfo?.description}</p>
				<h4>Evolution Chain</h4>
				{pokemonInfo?.evolutionChain.map(({ name, spriteUrl }) =>
					renderEvolutionChain(name, spriteUrl)
				)}
			</section>
		</section>
	);
};
