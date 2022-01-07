// libraries and hooks
import { FC } from "react";
// global types
import { PokemonBasicDetails } from "../globalTypes";
// styles
import "../styles/Card.css";

export const Card: FC<PokemonBasicDetails> = ({
	name,
	pokedexId,
	spriteUrl,
	types,
}) => {
	return (
		<li className="Card">
			<figure className="ImageContainer">
				<img
					className="CardSprite"
					width="110"
					src={spriteUrl}
					alt={`${name} sprite`}
				/>
			</figure>
			<span className="CardId">#{pokedexId}</span>
			<h5 className="CardName">{name}</h5>
			<section className="CardTypes">
				<span className="CardType">{types[0]}</span>
				<span className="CardType">{types[1]}</span>
			</section>
		</li>
	);
};
