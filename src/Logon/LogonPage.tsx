import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, Button} from 'react-native';

type Props = {};
interface State {
    text: string
    password: string
}
export default class LogonPage extends Component<Props, State> {
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
            <ImageBackground source={require('../../assets/WavyLeafBackground.jpg')} style={styles.container}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({text})}
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
        this.props.navigation.navigate('DashboardPage')
    }
    private signUp = () => {
        alert('Sign up')
    }
}
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