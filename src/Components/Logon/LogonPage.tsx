import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, Button} from 'react-native';
import {bindActionCreators, Dispatch} from "redux";
import {signIn, SignInAction} from "../../Actions/Logon";
import {connect} from "react-redux";

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
            password: ''
        };
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('../../../assets/WavyLeafBackground.jpg')} style={styles.container}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({email: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='white'
                        secureTextEntry={true}
                    />
                    <Button
                        title='Sign In'
                        onPress={this.signIn}
                        color='white'
                    />
                    <Button
                        title='Sign Up'
                        onPress={this.signUp}
                        color='white'
                    />
                </View>
            </ImageBackground>
        );
    }
    private signIn = () => {
        this.props.signIn(this.state.email, this.state.password);
        this.props.navigation.navigate('DashboardPage');
    }
    private signUp = () => {
        alert('Sign up')
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
    button: {

    }

});