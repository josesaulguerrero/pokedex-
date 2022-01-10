// libraries and hooks
import { FC, RefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
// styles
import "../styles/SearchBar.css";

export const SearchBar: FC = () => {
	const inputRef = useRef<HTMLInputElement>();
	const navigate = useNavigate();

	const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let inputValue: string = inputRef.current?.value.trim() as string;
		const validLength = inputValue?.length ? true : false;
		if (!validLength) {
			return;
		}
		navigate(`/details/${inputValue}`);
	};

	return (
		<form className="SearchBar" onSubmit={onFormSubmit}>
			<input
				className="SearchBarInput"
				ref={inputRef as RefObject<HTMLInputElement>}
				type="text"
				placeholder="Pokemon id or name"
			/>
			<button className="SearchBarButton" type="submit">
				Search
			</button>
		</form>
	);
};
