// components
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// styles
import "../styles/Pagination.css";

export const Pagination: FC = () => {
	const navigate = useNavigate();
	const pagesAmount = Math.ceil(1118 / 20); // number of pokemons in the API divided by pokemons per page
	let allPages = []; // list with page's id's
	for (let i = 0; i < pagesAmount; i++) {
		allPages.push(i);
	}
	const [lowerLimit, setLowerLimit] = useState(0);
	const [upperLimit, setUpperLimit] = useState(4); //i will have 4 buttons, so the upper limit is 4.
	const [currentPage, setCurrenPage] = useState(0);
	const currentPages = allPages.slice(lowerLimit, upperLimit);

	const goToPreviousPage = () => {
		setCurrenPage((currentPage) => {
			const newCurrentPage = currentPage - 1;
			if (newCurrentPage < lowerLimit) {
				setLowerLimit((currentLimit) => currentLimit - 4);
				setUpperLimit((currentLimit) => currentLimit - 4);
			}
			navigate(`/pokemons/${newCurrentPage}`);
			return newCurrentPage;
		});
	};

	const goToNextPage = () => {
		setCurrenPage((currentPage) => {
			const newCurrentPage = currentPage + 1;
			if (newCurrentPage >= upperLimit) {
				setLowerLimit((currentLimit) => currentLimit + 4);
				setUpperLimit((currentLimit) => currentLimit + 4);
			}
			navigate(`/pokemons/${newCurrentPage}`);
			return newCurrentPage;
		});
	};

	const renderPaginationButtons = (pageNumber: number): JSX.Element => (
		<li
			key={pageNumber}
			className={`paginationButton ${
				pageNumber === currentPage && "current"
			}`}
			onClick={() => setCurrenPage(pageNumber)}
		>
			<Link className="ButtonLink" to={`/pokemons/${pageNumber}`}>
				{pageNumber}
			</Link>
		</li>
	);
	return (
		<section className="Pagination">
			<button
				onClick={goToPreviousPage}
				className="previousPage"
				disabled={currentPage === allPages[0]}
			>
				Previous
			</button>
			<ul className="PaginationButtons">
				{currentPages.map(renderPaginationButtons)}
			</ul>
			<button
				onClick={goToNextPage}
				className="nextPage"
				disabled={currentPage === allPages[allPages.length - 1]}
			>
				Next
			</button>
		</section>
	);
};
