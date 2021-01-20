import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { logReducer } from "./reducer";

export let store = createStore(logReducer, applyMiddleware(logger));
