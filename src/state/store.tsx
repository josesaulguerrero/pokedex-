// libraries
import { FC } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
// root reducer
import { rootReducer } from "./reducers";

const Store =
	process.env.NODE_ENV === "production"
		? createStore(rootReducer, applyMiddleware(logger))
		: createStore(
				rootReducer,
				composeWithDevTools(applyMiddleware(logger))
		  );

export const ReduxProvider: FC = ({ children }) => {
	return <Provider store={Store}>{children}</Provider>;
};
