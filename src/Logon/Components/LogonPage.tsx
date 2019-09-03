import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, ActivityIndicator, StatusBar} from 'react-native';
import {bindActionCreators, Dispatch} from "redux";
import {signIn, SignInAction, signUpRequest, SignUpRequestAction} from "../Actions/Logon";
import {connect} from "react-redux";
import {Themed} from "react-navigation";
import {TextInput} from "react-native-gesture-handler";

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
                <TextInput
                    style={styles.input}
                    placeholder='Email or Phone Number'
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({email: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password: text})}
                />
            </View>
        )
    }
    private renderSignUp = () => {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Email Address'
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({email: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='First Name'
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({firstName: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Last Name'
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({lastName: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({phoneNumber: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='white'
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
        // this.props.navigation.navigate('DashboardPage');

    }

}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    signIn: bindActionCreators(signIn, dispatch),
    signUp: bindActionCreators(signUpRequest, dispatch)
});

export default connect(null, mapDispatchToProps)(LogonPage)

const styles = StyleSheet.create({
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