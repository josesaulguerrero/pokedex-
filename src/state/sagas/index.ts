// libraries
import { all } from "redux-saga/effects";
// sagas
import { saga as homeSaga } from "./home.saga";
import { saga as detailsSaga } from "./details.saga";

export function* rootSaga() {
	yield all([homeSaga(), detailsSaga()]);
}
