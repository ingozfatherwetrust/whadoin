import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';

interface FooterProps {
    onAddEvent: () => null;
    onManageGroups: () => null;
}
enum ButtonStyles {
    SELECTED_BUTTON,
    NON_SELECTED_BUTTON,
    ADD_EVENT_BUTTON

}
export default class Footer extends React.Component<FooterProps> {
    public render() {
        return(
            <View style={styles.footer}>
                <View style={styles.footerContainer}>
                    {this.plainFooterButton('Your Events', this.props.onManageGroups, ButtonStyles.SELECTED_BUTTON)}
                    {this.plainFooterButton('Manage Groups', this.props.onManageGroups, ButtonStyles.NON_SELECTED_BUTTON)}
                    {this.plainFooterButton('Add Event', this.props.onAddEvent, ButtonStyles.ADD_EVENT_BUTTON)}
                    {this.plainFooterButton('Notifications', this.props.onManageGroups, ButtonStyles.NON_SELECTED_BUTTON)}
                    {this.plainFooterButton('More', this.props.onManageGroups, ButtonStyles.NON_SELECTED_BUTTON)}
                </View>

            </View>
        )
    }
    private plainFooterButton = (buttonText: string, pressAction: () => null, buttonStyle: ButtonStyles) => {
        let touchableStyle;
        let buttonTextStyle;
        switch (buttonStyle) {
            case ButtonStyles.NON_SELECTED_BUTTON:
                buttonTextStyle = styles.addEventText;
                touchableStyle = styles.footerButton;
                break;
            case ButtonStyles.ADD_EVENT_BUTTON:
                buttonTextStyle = styles.addEventText;
                touchableStyle = styles.addEventButton;
                break;
            case ButtonStyles.SELECTED_BUTTON:
                buttonTextStyle = styles.selectedNavButtonText;
                touchableStyle = styles.footerButton;
                break;
        }
        return(
            <TouchableOpacity
                style={touchableStyle}
                onPress={pressAction}
            >
                <Text style={buttonTextStyle}>{buttonText}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    footer: {
        flex: 1,
    },
    footerContainer: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
    },
    footerButton: {
        flex: 1,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'white',
        borderRightWidth: .5
    },
    addEventButton: {
        flex: 1,
        backgroundColor: '#424851',
        borderRadius: 5,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'white',
        borderRightWidth: .5
    },
    addEventText: {
        fontSize: 10,
        color: '#bfbfbf',
    },
    selectedNavButtonText: {
        fontSize: 10,
        color: 'green'
    }
});