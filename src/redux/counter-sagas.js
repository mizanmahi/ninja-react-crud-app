import { takeEvery, put } from "redux-saga/effects"; // takeEvery, takeLatest and take are effects

import { COUNTER_TYPE } from "./counter-type";
import { increaseCounter, decreaseCount } from "./counter-action";

function* increamentSaga() {
   yield put(decreaseCount());
   // can't dispatch the same action
   // this is how to dispatch action in saga
}

export function* increament() {
   yield takeEvery(COUNTER_TYPE.INCREAMENT_COUNT, increamentSaga);
}
