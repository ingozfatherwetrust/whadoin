import React, {Component} from 'react';
import {TextInput} from "react-native-gesture-handler";
import styles from './Styles';

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