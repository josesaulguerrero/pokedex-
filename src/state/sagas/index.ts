// libraries
import { all } from "redux-saga/effects";
// sagas
import { saga as homeSaga } from "./home.saga";

export function* rootSaga() {
	yield all([homeSaga()]);
}
