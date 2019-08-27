import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import {bindActionCreators, Dispatch} from "redux";
import {AppIntroType, signIn, SignInAction} from "../../Actions/Logon";
import {connect} from "react-redux";
import firebase from "react-native-firebase";

type Props = {};
interface State {
    text: string
    password: string
}
interface PropsFromDispatch {
    signIn: (userName: string, password: string) => SignInAction;
}

export type ComponentProps = Props & PropsFromDispatch;
class LogonPage extends Component<ComponentProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            phoneNumber: '',
            profileName: '',
            isSignIn: true

        };
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('../../../assets/WavyLeafBackground.jpg')} style={styles.container}>
                {this.renderSignUp()}
                {this.renderBottomText()}
            </ImageBackground>
        );
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
                    placeholder='Profile Name'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({profileName: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({phoneNumber: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password: text})}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.signIn}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.signUp}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
    private renderBottomText = () => {
        return(
            <TouchableOpacity style={styles.bottomButton}>
                <Text style={styles.bottomText}>Already a member? Sign in</Text>
            </TouchableOpacity>
        )
    }
    private signIn = () => {
        this.props.signIn(this.state.email, this.state.password);
        this.props.navigation.navigate('DashboardPage');
    }
    private signUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((cb) => {
                debugger;
                console.log(cb);
            }).catch((err) => {
                debugger;
                console.log(err);
            })


    }

}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    signIn: bindActionCreators(signIn, dispatch)
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
        borderBottomWidth: 1
    }

});