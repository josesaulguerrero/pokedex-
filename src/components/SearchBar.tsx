// libraries and hooks
import { FC, RefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar: FC = () => {
	const inputRef = useRef<HTMLInputElement>();
	const navigate = useNavigate();

	const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const inputValue: string = inputRef.current?.value.trim() as string;
		const validLength = inputValue.length ? true : false;
		if (!validLength) {
			return;
		}
		navigate(`/details/${inputValue}`);
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input ref={inputRef as RefObject<HTMLInputElement>} type="text" />
			<button type="button">Search!</button>
		</form>
	);
};
