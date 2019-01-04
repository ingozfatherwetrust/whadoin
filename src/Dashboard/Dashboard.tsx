import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import EventItem from '../EventList/EventItem';
import events, {eventType} from '../../assets/jsonFiles/events';


export default class Dashboard extends React.Component {

    render () {
        const keyExtractor = (_: any, index: number) => String(index);
        return (
            <View style={styles.container}>
                <View style={styles.dashboard}>
                    <FlatList
                        keyExtractor={keyExtractor}
                        data={events}
                        renderItem={({item}) => <EventItem
                            userName={item.userName}
                            eventTitle={item.eventTitle}
                            eventDescription={item.eventDescription}
                        />}

                    />

                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.addEventButton}
                        onPress={this.addEvent}
                    >
                        <Text style={styles.selectedNavButtonText}>View Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.addEventButton}
                        onPress={this.addEvent}
                    >
                        <Text style={styles.addEventText}>Add Event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.addEventButton}
                        onPress={this.addEvent}
                    >
                        <Text style={styles.addEventText}>Manage Groups</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.addEventButton}
                        onPress={this.addEvent}
                    >
                        <Text style={styles.addEventText}>View Profile</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    private addEvent = () => {
        alert('add event')
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'grey'
    },
    dashboard: {
        flex: 10
    },
    footer: {
        flex: 1,
        flexDirection: 'row'
    },
    addEventButton: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'white',
        borderRightWidth: .5
        // marginLeft: 10,

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