"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var _navigator;
function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}
function navigate(routeName, params) {
    _navigator.dispatch(react_navigation_1.NavigationActions.navigate({
        routeName: routeName,
        params: params,
    }));
}
// add other navigation functions that you need and export them
exports.default = {
    navigate: navigate,
    setTopLevelNavigator: setTopLevelNavigator,
};
