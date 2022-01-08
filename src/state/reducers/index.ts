// libraries
import { combineReducers } from "redux";
// reducers
import { reducer as homeReducer } from "./home.reducers";
import { reducer as detailsReducer } from "./details.reducer";

export const rootReducer = combineReducers({
	home: homeReducer,
	details: detailsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
