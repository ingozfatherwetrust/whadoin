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
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var LogonPage = /** @class */ (function (_super) {
    __extends(LogonPage, _super);
    function LogonPage(props) {
        var _this = _super.call(this, props) || this;
        _this.renderSignIn = function () {
            return (<react_native_1.View>
                <react_native_gesture_handler_1.TextInput style={styles.input} placeholder='Email or Phone Number' placeholderTextColor='white' onChangeText={function (text) { return _this.setState({ email: text }); }}/>
                <react_native_gesture_handler_1.TextInput style={styles.input} placeholder='Password' placeholderTextColor='white' secureTextEntry={true} onChangeText={function (text) { return _this.setState({ password: text }); }}/>
            </react_native_1.View>);
        };
        _this.renderSignUp = function () {
            return (<react_native_1.View>
                <react_native_gesture_handler_1.TextInput style={styles.input} placeholder='Email Address' placeholderTextColor='white' onChangeText={function (text) { return _this.setState({ email: text }); }}/>
                <react_native_gesture_handler_1.TextInput style={styles.input} placeholder='Profile Name' placeholderTextColor='white' onChangeText={function (text) { return _this.setState({ userName: text }); }}/>
                <react_native_gesture_handler_1.TextInput style={styles.input} placeholder='Phone Number' placeholderTextColor='white' onChangeText={function (text) { return _this.setState({ phoneNumber: text }); }}/>
                <react_native_gesture_handler_1.TextInput style={styles.input} placeholder='Password' placeholderTextColor='white' secureTextEntry={true} onChangeText={function (text) { return _this.setState({ password: text }); }}/>

            </react_native_1.View>);
        };
        _this.renderSignInSignUpButton = function () {
            return (<react_native_1.TouchableOpacity style={styles.button} onPress={_this.state.isSignUp ? _this.signUp : _this.signIn}>
                <react_native_1.Text style={styles.buttonText}>{_this.state.isSignUp ? 'Sign Up' : 'Sign In'}</react_native_1.Text>
            </react_native_1.TouchableOpacity>);
        };
        _this.renderBottomText = function () {
            var isSignUp = _this.state.isSignUp;
            var signInBottom = 'Already a member? Sign in';
            var signUpBottom = 'Not a member? Sign up!';
            var bottomText = isSignUp ? signInBottom : signUpBottom;
            return (<react_native_1.TouchableOpacity style={styles.bottomButton} onPress={function () { return _this.setState({ isSignUp: !isSignUp }); }}>
                <react_native_1.Text style={styles.bottomText}>{bottomText}</react_native_1.Text>
            </react_native_1.TouchableOpacity>);
        };
        _this.signIn = function () {
            _this.props.signIn(_this.state.email, _this.state.password);
            _this.props.navigation.navigate('DashboardPage');
        };
        _this.signUp = function () {
            _this.props.signUp(_this.state.email, _this.state.userName, _this.state.phoneNumber, _this.state.password);
            // this.props.navigation.navigate('DashboardPage');
        };
        _this.state = {
            email: '',
            password: '',
            phoneNumber: '',
            userName: '',
            isSignUp: true
        };
        return _this;
    }
    LogonPage.prototype.render = function () {
        var isSignUp = this.state.isSignUp;
        return (<react_native_1.ImageBackground source={require('../../../assets/WavyLeafBackground.jpg')} style={styles.container}>
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
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'column',
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
    button: {
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    bottomText: {
        color: 'white',
        fontSize: 14,
    },
    bottomButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginTop: 15
    }
});
