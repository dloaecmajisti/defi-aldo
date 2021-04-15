import { applyMiddleware, compose, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/root";

export const initStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [applyMiddleware(sagaMiddleware), devToolsEnhancer({})];
    const store = createStore(rootReducer, compose(...middlewares));
    sagaMiddleware.run(rootSaga);

    return store;
};
