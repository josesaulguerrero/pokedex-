// libraries and hooks
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// styles
import "../styles/Pagination.css";

interface Props {
	totalElements: number;
	elementsPerPage: number;
	defaultPage: number;
}

export const Pagination: FC<Props> = ({
	totalElements,
	elementsPerPage,
	defaultPage,
}) => {
	const navigate = useNavigate();
	const AMOUNT_OF_BUTTONS = 4;
	const pagesAmount = Math.ceil(totalElements / elementsPerPage);
	let allPages = [];
	for (let i = 0; i < pagesAmount; i++) {
		allPages.push(i);
	}
	const [currentPage, setCurrenPage] = useState(defaultPage || 0);
	const [lowerLimit, setLowerLimit] = useState(
		currentPage > allPages.length - AMOUNT_OF_BUTTONS
			? allPages.length - AMOUNT_OF_BUTTONS
			: currentPage
	); // if the current page is equal to the last page, then the lower limit should be (allPages.length - AMOUNT_OF_BUTTONS), so that 4 buttons always show up.
	const [upperLimit, setUpperLimit] = useState(
		currentPage + AMOUNT_OF_BUTTONS
	);
	const currentPages = allPages.slice(lowerLimit, upperLimit);

	const goToPreviousPage = () => {
		setCurrenPage((currentPage) => {
			const newCurrentPage = currentPage - 1;
			if (newCurrentPage < lowerLimit) {
				setLowerLimit((currentLimit) => {
					let newLimit = currentLimit - AMOUNT_OF_BUTTONS;
					if (newLimit < 0) {
						newLimit = 0;
					}
					return newLimit;
				});
				setUpperLimit((currentLimit) => {
					let newLimit = currentLimit - AMOUNT_OF_BUTTONS;
					if (newLimit < AMOUNT_OF_BUTTONS) {
						newLimit = AMOUNT_OF_BUTTONS;
					}
					return newLimit;
				});
			}
			navigate(`/pokemons/${newCurrentPage}`);
			return newCurrentPage;
		});
	};

	const goToNextPage = () => {
		setCurrenPage((currentPage) => {
			const newCurrentPage = currentPage + 1;
			if (newCurrentPage >= upperLimit) {
				setLowerLimit((currentLimit) => currentLimit + AMOUNT_OF_BUTTONS);
				setUpperLimit((currentLimit) => {
					let newLimit = currentLimit + AMOUNT_OF_BUTTONS;
					if (newLimit >= allPages.length) {
						//if true, it means the upper limit has already reached the last page, therefore we need to set the upper limit to the last page and the lower limit to (last page - AMOUNT_OF_BUTTONS), this way 4 buttons always show up.
						newLimit = allPages.length;
						setLowerLimit(newLimit - AMOUNT_OF_BUTTONS);
					}
					return newLimit;
				});
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
				disabled={currentPage === allPages[0]} //if the current page is the first page, then this button should be disabled.
			>
				Previous
			</button>
			<ul className="PaginationButtons">
				{currentPages.map(renderPaginationButtons)}
			</ul>
			<button
				onClick={goToNextPage}
				className="nextPage"
				disabled={currentPage === allPages.length - 1} //if the current page is the last page, then this button should be disabled.
			>
				Next
			</button>
		</section>
	);
};
