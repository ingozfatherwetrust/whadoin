"use strict";
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
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_1 = require("react-native");
var WhiteTextBar = /** @class */ (function (_super) {
    __extends(WhiteTextBar, _super);
    function WhiteTextBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhiteTextBar.prototype.render = function () {
        return (<react_native_gesture_handler_1.TextInput style={styles.input} placeholder={this.props.placeholder} placeholderTextColor='white' secureTextEntry={this.props.secureTextEntry === true} onChangeText={this.props.onChangeText}/>);
    };
    return WhiteTextBar;
}(react_1.Component));
exports.default = WhiteTextBar;
var styles = react_native_1.StyleSheet.create({
    input: {
        width: 200,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 20
    },
});
