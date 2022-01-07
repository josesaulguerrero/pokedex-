// libraries and hooks
import { FC } from "react";
// styles
import "../styles/CardSkeleton.css";

export const CardSkeleton: FC = () => {
	return (
		<article className="CardSkeleton">
			<div className="image"></div>
			<div className="Id"></div>
			<div className="name"></div>
			<section className="types">
				<div className="type"></div>
				<div className="type"></div>
			</section>
		</article>
	);
};
