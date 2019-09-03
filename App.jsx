"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_navigation_stack_1 = require("react-navigation-stack");
var LogonPage_1 = require("./src/Logon/Components/LogonPage");
var Dashboard_1 = require("./src/Components/Dashboard/Dashboard");
var AddEvent_1 = require("./src/Components/AddEvent/AddEvent");
var react_redux_1 = require("react-redux");
var configureStore_1 = require("./configureStore");
var Logon_1 = require("./src/Logon/Actions/Logon");
var react_navigation_1 = require("react-navigation");
var NavigationService_1 = require("./NavigationService");
var RootStack = react_navigation_stack_1.createStackNavigator({
    LogOn: LogonPage_1.default,
    DashboardPage: Dashboard_1.default,
    AddEventPage: AddEvent_1.default
}, {
    initialRouteName: 'LogOn',
});
var AppContainer = react_navigation_1.createAppContainer(RootStack);
var initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
};
function todos(state, action) {
    if (state === void 0) { state = initialState; }
    var firstName = action.firstName, lastName = action.lastName, email = action.email, password = action.password, phoneNumber = action.phoneNumber, refreshToken = action.refreshToken, uid = action.uid;
    switch (action.type) {
        case Logon_1.AppIntroType.SignIn:
            // let {userName, password} = action;
            console.log('state', state);
            return __assign({}, state, { userName: action.userName, password: action.password });
        // case AppIntroType.SignUp:
        // const {firstName, lastName, email, password, phoneNumber} = action;
        // return {...state, firstName, lastName, email, password, phoneNumber};
        case Logon_1.AppIntroType.SignUpSuccess:
            return __assign({}, state, { firstName: firstName, lastName: lastName, email: email, password: password, phoneNumber: phoneNumber, refreshToken: refreshToken, uid: uid });
        default:
            return state;
    }
}
exports.todos = todos;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<react_redux_1.Provider store={configureStore_1.default()}>
            <AppContainer ref={function (navigatorRef) {
            NavigationService_1.default.setTopLevelNavigator(navigatorRef);
        }}/>
        </react_redux_1.Provider>);
    };
    return App;
}(react_1.Component));
exports.default = App;
