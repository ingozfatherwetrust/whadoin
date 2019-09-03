import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {todos} from "./App";
import sagas from './src/Redux-Store/sagas'

const sagaMiddleware = createSagaMiddleware();

// export enum LoginStatus {
//     LOGIN_SUCCESS = 'Login Success',
//     LOGIN_FAILURE = 'Login Failure',
//     LOGIN_UNATTEMPTED = 'Login Unattempted'
// }

export default function configureStore() {
    let initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''
    }
    // const store = createStore(todos, initialState, compose(applyMiddleware(sagaMiddleware)));
    const store = createStore(todos, initialState, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    sagaMiddleware.run(sagas);
    return store;
}
