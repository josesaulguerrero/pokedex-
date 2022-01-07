// libraries and hooks
import { forwardRef, LegacyRef } from "react";
// styles
import "../styles/CardSkeleton.css";

export const CardSkeleton = forwardRef((props, ref?) => (
	<article ref={ref as LegacyRef<HTMLElement>} className="CardSkeleton">
		<section className="ImageContainer">
			<article className="SkeletonSprite"></article>
		</section>
		<div className="SkeletonId"></div>
		<div className="SkeletonName"></div>
		<section className="SkeletonTypes">
			<div className="SkeletonType"></div>
			<div className="SkeletonType"></div>
		</section>
	</article>
));
