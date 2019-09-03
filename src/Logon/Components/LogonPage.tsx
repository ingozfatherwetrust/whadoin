import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, ActivityIndicator, StatusBar} from 'react-native';
import {bindActionCreators, Dispatch} from "redux";
import {signIn, SignInAction, signUpRequest, SignUpRequestAction} from "../Actions/Logon";
import {connect} from "react-redux";
import WhiteTextBar from "./WhiteTextBar";
import styles from './Styles';

type Props = {};
interface State {
    text: string
    password: string
}
interface PropsFromDispatch {
    signIn: (userName: string, password: string) => SignInAction;
    signUp: (email: string, firstName: string, lastName: string, phoneNumber: string, password: string) => SignUpRequestAction;
}

export type ComponentProps = Props & PropsFromDispatch;
class LogonPage extends Component<ComponentProps, State> {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            phoneNumber: '',
            firstName: '',
            lastName: '',
            isSignUp: true

        };
    }
    render() {
        let {isSignUp} = this.state;
        return (
            <ImageBackground source={require('../../../assets/WavyLeafBackground.jpg')} style={styles.container}>
                <StatusBar hidden={true} />
                <ActivityIndicator size="large" color="white" />
                {isSignUp ? this.renderSignUp() : this.renderSignIn()}
                {this.renderSignInSignUpButton()}
                {this.renderBottomText()}
            </ImageBackground>
        );
    }
    private renderSignIn = () => {
        return(
            <View>
                <WhiteTextBar
                    placeholder='Email or Phone Number'
                    onChangeText={(text) => this.setState({email: text})}
                />
                <WhiteTextBar
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password: text})}
                />
            </View>
        )
    }
    private renderSignUp = () => {
        return (
            <View>
                <WhiteTextBar
                    placeholder='Email or Phone Number'
                    onChangeText={(text) => this.setState({email: text})}
                />
                <WhiteTextBar
                    placeholder='First Name'
                    onChangeText={(text) => this.setState({firstName: text})}
                />
                <WhiteTextBar
                    placeholder='Last Name'
                    onChangeText={(text) => this.setState({lastName: text})}
                />
                <WhiteTextBar
                    placeholder='Phone Number'
                    onChangeText={(text) => this.setState({phoneNumber: text})}
                />
                <WhiteTextBar
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password: text})}
                />

            </View>
        )
    };
    private renderSignInSignUpButton = () => {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.state.isSignUp ? this.signUp :this.signIn}
            >
                <Text style={styles.buttonText}>{this.state.isSignUp ? 'Sign Up' : 'Sign In'}</Text>
            </TouchableOpacity>
        )
    };
    private renderBottomText = () => {
        let {isSignUp} = this.state;
        let signInBottom = 'Already a member? Sign in';
        let signUpBottom = 'Not a member? Sign up!';
        let bottomText = isSignUp ? signInBottom : signUpBottom;
        return(
            <TouchableOpacity
                style={styles.bottomButton}
                onPress={() => this.setState({isSignUp: !isSignUp})}
            >
                <Text style={styles.bottomText} >{bottomText}</Text>
            </TouchableOpacity>
        )
    }
    private signIn = () => {
        this.props.signIn(this.state.email, this.state.password);
        this.props.navigation.navigate('DashboardPage', );
    }
    private signUp = () => {
        this.props.signUp(this.state.email, this.state.firstName, this.state.lastName, this.state.phoneNumber, this.state.password);

    }

}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    signIn: bindActionCreators(signIn, dispatch),
    signUp: bindActionCreators(signUpRequest, dispatch)
});

export default connect(null, mapDispatchToProps)(LogonPage)
