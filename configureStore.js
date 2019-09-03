"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_saga_1 = require("redux-saga");
var App_1 = require("./App");
var sagas_1 = require("./src/Redux-Store/sagas");
var sagaMiddleware = redux_saga_1.default();
var LoginStatus;
(function (LoginStatus) {
    LoginStatus["LOGIN_SUCCESS"] = "Login Success";
    LoginStatus["LOGIN_FAILURE"] = "Login Failure";
    LoginStatus["LOGIN_UNATTEMPTED"] = "Login Unattempted";
})(LoginStatus = exports.LoginStatus || (exports.LoginStatus = {}));
function configureStore() {
    var initialState = {
        loginStatus: LoginStatus.LOGIN_UNATTEMPTED
    };
    // const store = createStore(todos, initialState, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    var store = redux_1.createStore(App_1.todos, initialState, redux_1.compose(redux_1.applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    sagaMiddleware.run(sagas_1.default);
    return store;
}
exports.default = configureStore;
