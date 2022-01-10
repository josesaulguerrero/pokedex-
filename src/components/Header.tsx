// libraries and hooks
import { FC } from "react";
// styles
import "../styles/Header.css";
// components
import { SearchBar } from "./SearchBar";

export const Header: FC = () => {
	return (
		<header className="Header">
			<h1 className="HeaderTitle">Pokédex</h1>
			<SearchBar />
		</header>
	);
};
