import { createStore, applyMiddleware } from "redux";

//reducers
import rootReducer from "./reducers/rootReducer";

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
const store = createStore(rootReducer, null, applyMiddleware(logAction));

export default store;
