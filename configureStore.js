import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {todos} from "./App";
import signInMain from './src/Sagas/SignIn'

const sagaMiddleware = createSagaMiddleware();

const sagas = [
    signInMain()
];

export default function configureStore() {
    const store = createStore(todos, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(signInMain);
    return store;
}
