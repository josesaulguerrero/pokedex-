// libraries and hooks
import React, { FC } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
// global types
import { PokemonBasicDetails } from "../globalTypes";
// styles
import "../styles/Card.css";
import { CardSkeleton } from "./CardSkeleton";
import { Link } from "react-router-dom";

interface Props extends PokemonBasicDetails {
	loading: boolean;
}

export const Card: FC<Props> = ({
	name,
	pokedexId,
	spriteUrl,
	types,
	loading,
}) => {
	const [observerRef, isVisible] = useIntersectionObserver();

	if (!isVisible || loading)
		return (
			<CardSkeleton ref={observerRef as React.Ref<unknown> | undefined} />
		);

	const renderPokemonTypes = (type: string, index: number): JSX.Element => (
		<span key={index}>{type}</span>
	);

	return (
		<li className={`Card ${types[0]}`} id="Card">
			<Link to={`/pokemon/${name}`} className="CardLink">
				<figure className="ImageContainer">
					<img
						className="CardSprite"
						width="110"
						src={isVisible ? spriteUrl : ""}
						alt={`${name} sprite`}
					/>
				</figure>
				<span className="CardId">#{pokedexId}</span>
				<h5 className="CardName">{name}</h5>
				<section className="CardTypes">
					{types.map(renderPokemonTypes)}
				</section>
			</Link>
		</li>
	);
};
