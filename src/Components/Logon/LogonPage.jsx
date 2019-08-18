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
var redux_1 = require("redux");
var Logon_1 = require("../../Actions/Logon");
var react_redux_1 = require("react-redux");
var LogonPage = /** @class */ (function (_super) {
    __extends(LogonPage, _super);
    function LogonPage(props) {
        var _this = _super.call(this, props) || this;
        _this.signIn = function () {
            _this.props.signIn(_this.state.email, _this.state.password);
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
        return (<react_native_1.ImageBackground source={require('../../../assets/WavyLeafBackground.jpg')} style={styles.container}>
                <react_native_1.View>
                    <react_native_1.TextInput style={styles.input} placeholder='Username' placeholderTextColor='white' onChangeText={function (text) { return _this.setState({ email: text }); }}/>
                    <react_native_1.TextInput style={styles.input} placeholder='Password' placeholderTextColor='white' secureTextEntry={true}/>
                    <react_native_1.Button title='Sign In' onPress={this.signIn} color='white'/>
                    <react_native_1.Button title='Sign Up' onPress={this.signUp} color='white'/>
                </react_native_1.View>
            </react_native_1.ImageBackground>);
    };
    return LogonPage;
}(react_1.Component));
var mapDispatchToProps = function (dispatch) { return ({
    signIn: redux_1.bindActionCreators(Logon_1.signIn, dispatch)
}); };
exports.default = react_redux_1.connect(null, mapDispatchToProps)(LogonPage);
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
