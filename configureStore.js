import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {todos} from "./App";
import sagas from './src/Redux-Store/sagas'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    let initialState = {
        userName: '',
        email: '',
        password: '',
        phoneNumber: ''
    }
    const store = createStore(todos, initialState, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    sagaMiddleware.run(sagas);
    return store;
}
