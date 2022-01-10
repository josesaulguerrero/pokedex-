// libraries and hooks
import { FC } from "react";
// components
import { GoBack } from "./GoBack";
// styles
import "../styles/DetailsSkeleton.css";

export const DetailsSkeleton: FC = () => {
	return (
		<section className="DetailsSkeletonContainer">
			<section className="DetailsSkeletonSection">
				<GoBack />
				<div className="DetailsSkeletonImage"></div>
				<section className="DetailsSkeletonBody">
					<div className="DetailsSkeletonName"></div>
					<div className="DetailsSkeletonSubtitle"></div>
					<ul className="DetailsSkeletonPokemonTypes">
						<li className="DetailsSkeletonBadges"></li>
						<li className="DetailsSkeletonBadges"></li>
					</ul>
					<div className="DetailsSkeletonSubtitle"></div>
					<div className="DetailsSkeletonText"></div>
					<div className="DetailsSkeletonSubtitle"></div>
					<ul className="DetailsSkeletonEvolutionChain">
						<li className="SkeletonEvolutionChainItem"></li>
						<li className="SkeletonEvolutionChainItem"></li>
						<li className="SkeletonEvolutionChainItem"></li>
					</ul>
				</section>
			</section>
		</section>
	);
};
