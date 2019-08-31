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
var react_native_1 = require("react-native");
var ButtonStyles;
(function (ButtonStyles) {
    ButtonStyles[ButtonStyles["SELECTED_BUTTON"] = 0] = "SELECTED_BUTTON";
    ButtonStyles[ButtonStyles["NON_SELECTED_BUTTON"] = 1] = "NON_SELECTED_BUTTON";
    ButtonStyles[ButtonStyles["ADD_EVENT_BUTTON"] = 2] = "ADD_EVENT_BUTTON";
})(ButtonStyles || (ButtonStyles = {}));
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.plainFooterButton = function (buttonText, pressAction, buttonStyle) {
            var touchableStyle;
            var buttonTextStyle;
            switch (buttonStyle) {
                case ButtonStyles.NON_SELECTED_BUTTON:
                    buttonTextStyle = styles.addEventText;
                    touchableStyle = styles.footerButton;
                    break;
                case ButtonStyles.ADD_EVENT_BUTTON:
                    buttonTextStyle = styles.addEventText;
                    touchableStyle = styles.addEventButton;
                    break;
                case ButtonStyles.SELECTED_BUTTON:
                    buttonTextStyle = styles.selectedNavButtonText;
                    touchableStyle = styles.footerButton;
                    break;
            }
            return (<react_native_1.TouchableOpacity style={touchableStyle} onPress={pressAction}>
                <react_native_1.Text style={buttonTextStyle}>{buttonText}</react_native_1.Text>
            </react_native_1.TouchableOpacity>);
        };
        return _this;
    }
    Footer.prototype.render = function () {
        return (<react_native_1.View style={styles.footer}>
                <react_native_1.View style={styles.footerContainer}>
                    {this.plainFooterButton('Your Events', this.props.onManageGroups, ButtonStyles.SELECTED_BUTTON)}
                    {this.plainFooterButton('Manage Groups', this.props.onManageGroups, ButtonStyles.NON_SELECTED_BUTTON)}
                    {this.plainFooterButton('Add Event', this.props.onAddEvent, ButtonStyles.ADD_EVENT_BUTTON)}
                    {this.plainFooterButton('Notifications', this.props.onManageGroups, ButtonStyles.NON_SELECTED_BUTTON)}
                    {this.plainFooterButton('More', this.props.onManageGroups, ButtonStyles.NON_SELECTED_BUTTON)}
                </react_native_1.View>

            </react_native_1.View>);
    };
    return Footer;
}(react_1.default.Component));
exports.default = Footer;
var styles = react_native_1.StyleSheet.create({
    footer: {
        flex: 1,
    },
    footerContainer: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
    },
    footerButton: {
        flex: 1,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'white',
        borderRightWidth: .5
    },
    addEventButton: {
        flex: 1,
        backgroundColor: '#424851',
        borderRadius: 5,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'white',
        borderRightWidth: .5
    },
    addEventText: {
        fontSize: 10,
        color: '#bfbfbf',
    },
    selectedNavButtonText: {
        fontSize: 10,
        color: 'green'
    }
});
