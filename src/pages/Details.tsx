/* eslint-disable react-hooks/exhaustive-deps */
// libraries and hooks
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// app state type
import { AppState } from "../state/reducers";
// action types
import { Details as detailsTypes } from "../state/actionTypes/index";
// styles
import "../styles/Details.css";
// components
import { GoBack } from "../components/GoBack";
import { DetailsSkeleton } from "../components/DetailsSkeleton";
import { Badge } from "../components/Badge";

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
		<Badge key={index} type={type}></Badge>
	);

	const renderEvolutionChain = (
		name: string,
		spriteUrl: string
	): JSX.Element => (
		<li
			className={`EvolutionChainItem ${name === pokemonName && "current"}`}
			key={name}
		>
			<Link to={`/details/${name}`}>
				<img width="50px" src={spriteUrl} alt={`${name} sprite`} />
			</Link>
		</li>
	);

	if (loading) return <DetailsSkeleton />;
	if (error)
		return (
			<h1 className="ErrorText">{`we're so sorry, it seems like there's no enough information about this pokemon...`}</h1>
		);

	return (
		<section className="DetailsContainer">
			<section className="DetailsSection">
				<GoBack />
				<figure className={`DetailsImage ${pokemonInfo?.types[0]}`}>
					<img
						width="80%"
						src={pokemonInfo?.spriteUrl}
						alt={`${pokemonInfo?.name} sprite`}
					/>
				</figure>
				<section className="DetailsBody">
					<h2 className="DetailsName">{pokemonInfo?.name}</h2>
					<h4 className="DetailsSubtitle">Types</h4>
					<ul className="DetailsPokemonTypes">
						{pokemonInfo?.types.map(renderPokemonTypes)}
					</ul>
					<h4 className="DetailsSubtitle">Description</h4>
					<p className="DetailsText">{pokemonInfo?.description}</p>
					<h4 className="DetailsSubtitle">Evolution Chain</h4>
					<ul className="EvolutionChain">
						{pokemonInfo?.evolutionChain.map(({ name, spriteUrl }) =>
							renderEvolutionChain(name, spriteUrl)
						)}
					</ul>
				</section>
			</section>
		</section>
	);
};
