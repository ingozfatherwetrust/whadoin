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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_navigation_1 = require("react-navigation");
var LogonPage_1 = require("./src/Components/Logon/LogonPage");
var Dashboard_1 = require("./src/Components/Dashboard/Dashboard");
var AddEvent_1 = require("./src/Components/AddEvent/AddEvent");
var react_redux_1 = require("react-redux");
var configureStore_1 = require("./configureStore");
var Logon_1 = require("./src/Actions/Logon");
var RootStack = react_navigation_1.createStackNavigator({
    LogOn: LogonPage_1.default,
    DashboardPage: Dashboard_1.default,
    AddEventPage: AddEvent_1.default
}, {
    initialRouteName: 'LogOn',
    navigationOptions: {
        title: 'Whadoin',
        headerLeft: null,
        headerStyle: {
            backgroundColor: 'green',
        },
    }
});
function todos(state, action) {
    if (state === void 0) { state = []; }
    alert(JSON.stringify(action));
    switch (action.type) {
        case Logon_1.AppIntroType.SignIn:
            alert('caught');
            return state.concat([action.text]);
        default:
            return state;
    }
}
exports.todos = todos;
// const store = createStore(todos)
var store = configureStore_1.default();
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<react_redux_1.Provider store={configureStore_1.default()}>
            <RootStack />
        </react_redux_1.Provider>);
    };
    return App;
}(react_1.Component));
exports.default = App;
