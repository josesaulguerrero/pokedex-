// libraries and hooks
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
// components
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate replace to="/pokemons/0" />} />
				<Route path="/pokemons/:pageNumber" element={<Home />} />
				<Route path="/details/:pokemonName" element={<Details />} />
			</Routes>
		</Router>
	);
};
