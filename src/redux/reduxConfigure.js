import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

//reducers
//import rootReducer from "../reducers/rootReducer";

import { reducer } from "./redux";
import { watcherSaga } from "./saga";

const logAction = store => {
  //this is going to run when the action dispatches
  return next => {
    return action => {
      const result = next(action);
      console.log(
        `%cCaught in the middleware ${JSON.stringify(result)}`,
        "border-left:solid 6px green; padding-left:10px"
        //"background: #b7e8b8; color: black"
      );
      return result;
    };
  };
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

sagaMiddleware.run(watcherSaga);

export default store;
