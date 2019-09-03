"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_saga_1 = require("redux-saga");
var App_1 = require("./App");
var sagas_1 = require("./src/Redux-Store/sagas");
var sagaMiddleware = redux_saga_1.default();
// export enum LoginStatus {
//     LOGIN_SUCCESS = 'Login Success',
//     LOGIN_FAILURE = 'Login Failure',
//     LOGIN_UNATTEMPTED = 'Login Unattempted'
// }
function configureStore() {
    var initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''
    };
    // const store = createStore(todos, initialState, compose(applyMiddleware(sagaMiddleware)));
    var store = redux_1.createStore(App_1.todos, initialState, redux_1.compose(redux_1.applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    sagaMiddleware.run(sagas_1.default);
    return store;
}
exports.default = configureStore;
