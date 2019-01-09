import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Picker} from 'react-native';

interface AddEventProps {
    onSubmit: () => null;
    onCancel: () => null;
}

export default class AddEvent extends React.Component<AddEventProps> {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={styles.addEventText}>Add Event</Text>
                        <TextInput
                            placeholder='Event Title'
                            placeholderTextColor='grey'
                            style={styles.eventInput}
                        />
                        <TextInput
                            placeholder='Event Location'
                            placeholderTextColor='grey'
                            style={styles.eventInput}
                        />
                    </View>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Event Description"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.interactionContainer}>
                        <TouchableOpacity style={styles.interactionButton}>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.interactionButton}
                            onPress={this.props.onCancel}
                        >
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


        )

    }
}
const styles = StyleSheet.create({
    eventInput: {
        borderBottomWidth: .5,
        borderBottomColor: 'black',
        flex: 1,
        height: 40,
        fontSize: 20,
        margin: 10,
        color: 'grey'
    },
    container: {
        flex: 1,
        marginTop: 22
    },
    innerContainer: {
        flex: 1
    },
    addEventText: {
        fontSize: 50,
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
    textAreaContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
        flexDirection: 'row',
        marginTop: 30
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        flex: 1
    },
});