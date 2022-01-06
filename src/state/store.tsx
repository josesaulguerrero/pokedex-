// libraries
import { FC } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
// root reducer
import { rootReducer } from "./reducers";
// root saga
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const Store =
	process.env.NODE_ENV === "production"
		? createStore(rootReducer, applyMiddleware(sagaMiddleware))
		: createStore(
				rootReducer,
				composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
		  );

export const ReduxProvider: FC = ({ children }) => {
	return <Provider store={Store}>{children}</Provider>;
};

sagaMiddleware.run(rootSaga);
