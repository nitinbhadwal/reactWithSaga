import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import RootReducer from "./Redux/Reducers/rootReducer";
import RootSaga from "./Redux/Sagas/RootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// Mounting it on the store
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

// Then run the saga
sagaMiddleware.run(RootSaga);

export default store;
