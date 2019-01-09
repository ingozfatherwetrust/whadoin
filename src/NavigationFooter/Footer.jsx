"use strict";
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
var react_native_1 = require("react-native");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (<react_native_1.View style={styles.footer}>
                <react_native_1.View style={styles.footerContainer}>
                    <react_native_1.TouchableOpacity style={styles.footerButton} onPress={this.addEvent}>
                        <react_native_1.Text style={styles.selectedNavButtonText}>Your Events</react_native_1.Text>
                    </react_native_1.TouchableOpacity>

                    <react_native_1.TouchableOpacity style={styles.footerButton} onPress={this.addEvent}>
                        <react_native_1.Text style={styles.addEventText}>Manage Groups</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity style={styles.addEventButton} onPress={this.props.onAddEvent}>
                        <react_native_1.Text style={styles.addEventText}>Add Event</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity style={styles.footerButton} onPress={this.addEvent}>
                        <react_native_1.Text style={styles.addEventText}>Notifications</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity style={styles.footerButton} onPress={this.addEvent}>
                        <react_native_1.Text style={styles.addEventText}>More</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
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
