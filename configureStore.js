import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {todos} from "./App";
import signInMain from './src/Sagas/SignIn'
import main from "./src/Redux-Store/sagas";
import sagas from './src/Redux-Store/sagas'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(todos, compose(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(sagas);
    return store;
}
