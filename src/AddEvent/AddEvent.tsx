import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, PickerIOS} from 'react-native';

interface AddEventProps {
    onSubmit: () => null;
    onCancel: () => null;
}
interface addEventState {
    title: string;
    location: string;
    description: string;
    public: boolean;
    modalOpen: boolean;
    pickerVal: string;
}

export default class AddEvent extends React.Component<AddEventProps, addEventState> {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            location: '',
            description: '',
            public: true,
            modalOpen: false,
            pickerVal: ''
        };
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.interactionContainer}>
                        <TouchableOpacity
                            style={{...styles.interactionButton, justifyContent: 'center'}}
                            onPress={this.props.onCancel}
                        >
                            <Text>Cancel</Text>
                        </TouchableOpacity>

                        <View style={{justifyContent: 'center'}}>
                            <Text>Event Post</Text>
                        </View>

                        <TouchableOpacity
                            style={{...styles.interactionButton, justifyContent: 'center'}}
                            onPress={this.props.onSubmit}
                        >
                            <Text>Post</Text>
                        </TouchableOpacity>

                    </View>
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
                {this.returnPicker()}
            </View>
        )
    }
    private changeState = () => {
        this.setState({modalOpen: !this.state.modalOpen});
    };
    private returnPicker = () => {
        if(!this.state.modalOpen) return null;
        let items = ['Apple', 'Pear', 'Banana', 'Orange'];
        this.setState({pickerVal: items[0]});
        return (
            <View>
                <View style={styles.closeButtonContainer}>
                    <TouchableOpacity style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Choose</Text>
                    </TouchableOpacity>
                </View>
                <PickerIOS
                    selectedValue={this.state.pickerVal}
                    onValueChange={(itemValue) => {
                        this.setState({pickerVal: itemValue})
                    }
                    }
                >
                    {items.map((item, index) =>
                        <PickerIOS.Item
                            key={index}
                            label={item}
                            value={item}
                        />
                    )}
                </PickerIOS>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    eventInput: {
        height: 30,
        fontSize: 30,
        margin: 10,
        color: 'black'
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
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-between'
    },
    pickerBar: {
        flexDirection: 'row',
        height: 30,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-between'
    },
    interactionButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textAreaContainer: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        padding: 5,
        flexDirection: 'row',
        marginTop: 30,
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        flex: 1
    },
    closeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderTopColor: '#e2e2e2',
        borderTopWidth: 1,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth:1
    },
    closeButton: {
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10
    },
    closeButtonText: {
        color: '#027afe'
    },
});