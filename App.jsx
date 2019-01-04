"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_navigation_1 = require("react-navigation");
var LogonPage_1 = require("./src/Logon/LogonPage");
var Dashboard_1 = require("./src/Dashboard/Dashboard");
var RootStack = react_navigation_1.createStackNavigator({
    LogOn: LogonPage_1.default,
    DashboardPage: Dashboard_1.default
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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return <RootStack />;
    };
    return App;
}(react_1.Component));
exports.default = App;
