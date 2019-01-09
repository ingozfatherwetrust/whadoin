import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';

interface FooterProps {
    onAddEvent: () => null;
}
export default class Footer extends React.Component<FooterProps> {
    public render() {
        return(
            <View style={styles.footer}>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        style={styles.footerButton}
                        onPress={this.addEvent}
                    >
                        <Text style={styles.selectedNavButtonText}>Your Events</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.footerButton}
                        onPress={this.addEvent}
                    >
                        <Text style={styles.addEventText}>Manage Groups</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.addEventButton}
                        onPress={this.props.onAddEvent}
                    >
                        <Text style={styles.addEventText}>Add Event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.footerButton}
                        onPress={this.addEvent}
                    >
                        <Text style={styles.addEventText}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.footerButton}
                        onPress={this.addEvent}
                    >
                        <Text style={styles.addEventText}>More</Text>
                    </TouchableOpacity>
                </View>

            </View>
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