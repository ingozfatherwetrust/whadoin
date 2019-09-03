import React, {Component} from 'react';
import {TextInput} from "react-native-gesture-handler";
import {StyleSheet} from 'react-native'

interface WhiteTextBarProps {
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText: (string) => void;
}

export default class WhiteTextBar extends Component<WhiteTextBarProps> {
    render() {
        return (
            <TextInput
                style={styles.input}
                placeholder={this.props.placeholder}
                placeholderTextColor='white'
                secureTextEntry={this.props.secureTextEntry === true}
                onChangeText={this.props.onChangeText}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 20
    },
})