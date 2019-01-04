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
var LogonPage = /** @class */ (function (_super) {
    __extends(LogonPage, _super);
    function LogonPage(props) {
        var _this = _super.call(this, props) || this;
        _this.signIn = function () {
            _this.props.navigation.navigate('DashboardPage');
        };
        _this.signUp = function () {
            alert('Sign up');
        };
        _this.state = {
            email: '',
            password: ''
        };
        return _this;
    }
    LogonPage.prototype.render = function () {
        var _this = this;
        var navigate = this.props.navigation.navigate;
        return (<react_native_1.ImageBackground source={require('../../assets/WavyLeafBackground.jpg')} style={styles.container}>
                <react_native_1.View>
                    <react_native_1.TextInput style={styles.input} placeholder='Username' placeholderTextColor='white' onChangeText={function (text) { return _this.setState({ text: text }); }}/>
                    <react_native_1.TextInput style={styles.input} placeholder='Password' placeholderTextColor='white' secureTextEntry={true}/>
                    <react_native_1.Button title='Sign In' onPress={this.signIn} color='white'/>
                    <react_native_1.Button title='Sign Up' onPress={this.signUp} color='white'/>
                </react_native_1.View>
            </react_native_1.ImageBackground>);
    };
    return LogonPage;
}(react_1.Component));
exports.default = LogonPage;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    labels: {
        color: 'white',
    },
    input: {
        width: 200,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 20
    },
    button: {}
});
