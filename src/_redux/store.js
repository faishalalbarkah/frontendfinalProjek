import { createStore, combineReducers, applyMiddleware } from "redux";
//Insert reducers
import LOGINR from "../_reducers/LoginR";
import REGISR from "../_reducers/RegisterR";
import ADDTIKETR from "../_reducers/AddTiketR";

import { logger, promise } from "./middleware";

const reducers = combineReducers({
  LOGINR,
  REGISR,
  ADDTIKETR
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
