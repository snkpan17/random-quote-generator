import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducers';
import { watcherSaga } from "../sagas";

const initialState = {
  quote: "Do not what I say, Do what I do",
  author: "Snk"
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);

export default store;
