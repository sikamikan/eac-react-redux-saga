//
// https://hackernoon.com/redux-saga-tutorial-for-beginners-and-dog-lovers-aa69a17db645
//
import * as Api from "../services/Api";

import { takeLatest, call, put } from "redux-saga/effects";

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchTangoEventos() {
  //console.log("fetch");
  return Api.getPremise("TangoEventos");
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchTangoEventos);
    console.log("response in saga: ", response);
    const tangoEventos = response;
    yield put({ type: "API_CALL_SUCCESS", tangoEventos });
  } catch (error) {
    console.log(error);
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
