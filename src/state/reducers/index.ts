// libraries
import { combineReducers } from "redux";
// reducers
import { reducer as homeReducer } from "./home.reducers";

export const rootReducer = combineReducers({
	home: homeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
