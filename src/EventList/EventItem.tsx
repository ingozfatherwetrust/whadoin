import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';
import MapView from "react-native-maps";

interface EventProps {
    userName: string;
    eventTitle: string;
    eventDescription: string;
}

export default class EventItem extends React.Component<EventProps> {
    render() {
        return (
            <View style={styles.eventContainer}>
                <View style={styles.eventHeader}>
                    <Image source={require('../../assets/genericBatman.jpeg')} style={styles.eventProfilePic}/>
                    <View>
                        <Text style={styles.eventPosterName}>{this.props.userName}</Text>
                        <Text style={styles.timePosted}>3 hrs ago</Text>
                        <Text style={styles.timePosted}>10106 Dorchester Ct. Clarkston, MI</Text>
                    </View>

                </View>
                <Text style={styles.eventTitle}>{this.props.eventTitle}</Text>
                <Text style={styles.eventDescription}>
                    {this.props.eventDescription}
                </Text>
                <View style={styles.interactionContainer}>
                    <TouchableOpacity style={styles.interactionButton}>
                        <Text>Confirm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.interactionButton}>
                        <Text>Deny</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    eventDescription: {
        paddingLeft: 10
    },
    interactionContainer: {
        flexDirection: 'row',
        height: 30,
        marginTop: 10
    },
    interactionButton: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: 'white',
        borderRightWidth: .5
    },
    eventContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 3,
        marginTop: 3,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'white'

    },
    eventHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    eventProfilePic: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginLeft: 10
    },
    eventPosterName: {
        marginLeft: 15,
        fontSize: 15,
    },
    timePosted: {
        fontSize: 12,
        marginLeft: 15,
        color: 'grey'
    },
    eventTitle: {
        fontSize: 20,

    }
});