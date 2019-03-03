//
// https://hackernoon.com/redux-saga-tutorial-for-beginners-and-dog-lovers-aa69a17db645
//

import { takeLatest, call, put } from "redux-saga/effects";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  console.log("fetch");
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response.json()
  );
  //  return axios({
  //   method: "get",
  //    url: "https://dog.ceo/api/breeds/image/random"
  //  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    console.log("response", response);
    //const dog = response.data.message;
    const dog = response.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", dog });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
