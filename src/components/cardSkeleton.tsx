// libraries and hooks
import { FC } from "react";

export const cardSkeleton: FC = () => {
	return (
		<article className="cardSkeleton">
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
