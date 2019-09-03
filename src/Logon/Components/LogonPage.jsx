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
var Logon_1 = require("../Actions/Logon");
var react_redux_1 = require("react-redux");
var WhiteTextBar_1 = require("./WhiteTextBar");
var Styles_1 = require("./Styles");
var LogonPage = /** @class */ (function (_super) {
    __extends(LogonPage, _super);
    function LogonPage(props) {
        var _this = _super.call(this, props) || this;
        _this.renderSignIn = function () {
            return (<react_native_1.View>
                <WhiteTextBar_1.default placeholder='Email or Phone Number' onChangeText={function (text) { return _this.setState({ email: text }); }}/>
                <WhiteTextBar_1.default placeholder='Password' secureTextEntry={true} onChangeText={function (text) { return _this.setState({ password: text }); }}/>
            </react_native_1.View>);
        };
        _this.renderSignUp = function () {
            return (<react_native_1.View>
                <WhiteTextBar_1.default placeholder='Email or Phone Number' onChangeText={function (text) { return _this.setState({ email: text }); }}/>
                <WhiteTextBar_1.default placeholder='First Name' onChangeText={function (text) { return _this.setState({ firstName: text }); }}/>
                <WhiteTextBar_1.default placeholder='Last Name' onChangeText={function (text) { return _this.setState({ lastName: text }); }}/>
                <WhiteTextBar_1.default placeholder='Phone Number' onChangeText={function (text) { return _this.setState({ phoneNumber: text }); }}/>
                <WhiteTextBar_1.default placeholder='Password' secureTextEntry={true} onChangeText={function (text) { return _this.setState({ password: text }); }}/>

            </react_native_1.View>);
        };
        _this.renderSignInSignUpButton = function () {
            return (<react_native_1.TouchableOpacity style={Styles_1.default.button} onPress={_this.state.isSignUp ? _this.signUp : _this.signIn}>
                <react_native_1.Text style={Styles_1.default.buttonText}>{_this.state.isSignUp ? 'Sign Up' : 'Sign In'}</react_native_1.Text>
            </react_native_1.TouchableOpacity>);
        };
        _this.renderBottomText = function () {
            var isSignUp = _this.state.isSignUp;
            var signInBottom = 'Already a member? Sign in';
            var signUpBottom = 'Not a member? Sign up!';
            var bottomText = isSignUp ? signInBottom : signUpBottom;
            return (<react_native_1.TouchableOpacity style={Styles_1.default.bottomButton} onPress={function () { return _this.setState({ isSignUp: !isSignUp }); }}>
                <react_native_1.Text style={Styles_1.default.bottomText}>{bottomText}</react_native_1.Text>
            </react_native_1.TouchableOpacity>);
        };
        _this.signIn = function () {
            _this.props.signIn(_this.state.email, _this.state.password);
            _this.props.navigation.navigate('DashboardPage');
        };
        _this.signUp = function () {
            _this.props.signUp(_this.state.email, _this.state.firstName, _this.state.lastName, _this.state.phoneNumber, _this.state.password);
        };
        _this.state = {
            email: '',
            password: '',
            phoneNumber: '',
            firstName: '',
            lastName: '',
            isSignUp: true
        };
        return _this;
    }
    LogonPage.prototype.render = function () {
        var isSignUp = this.state.isSignUp;
        return (<react_native_1.ImageBackground source={require('../../../assets/WavyLeafBackground.jpg')} style={Styles_1.default.container}>
                <react_native_1.StatusBar hidden={true}/>
                <react_native_1.ActivityIndicator size="large" color="white"/>
                {isSignUp ? this.renderSignUp() : this.renderSignIn()}
                {this.renderSignInSignUpButton()}
                {this.renderBottomText()}
            </react_native_1.ImageBackground>);
    };
    LogonPage.navigationOptions = {
        header: null
    };
    return LogonPage;
}(react_1.Component));
var mapDispatchToProps = function (dispatch) { return ({
    signIn: redux_1.bindActionCreators(Logon_1.signIn, dispatch),
    signUp: redux_1.bindActionCreators(Logon_1.signUpRequest, dispatch)
}); };
exports.default = react_redux_1.connect(null, mapDispatchToProps)(LogonPage);
