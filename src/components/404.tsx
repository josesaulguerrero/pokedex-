// libraries and hooks
import { FC } from "react";
import { Link } from "react-router-dom";
// styles
import "../styles/404.css";
// assets
import Pokeball from "../assets/pokeball.png";

export const NotFound: FC = () => {
	return (
		<section className="NotFound">
			<section className="NotFound404">
				<h2>4</h2>
				<img
					className="PokeballImage"
					width="100px"
					src={Pokeball}
					alt="pokeball logo"
				/>
				<h2>4</h2>
			</section>
			<section className="NotFoundBody">
				<h3>We're sorry, there's nothing in this page</h3>
				<Link to="/">Go to the main page</Link>
			</section>
		</section>
	);
};
