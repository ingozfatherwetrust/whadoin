import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Modal} from 'react-native';
import EventItem from '../EventList/EventItem';
import events from '../../assets/jsonFiles/events';
import Footer from "../NavigationFooter/Footer";
import AddEvent from "../AddEvent/AddEvent";

interface DashboardState {
    modalVisible: boolean
}
export default class Dashboard extends React.Component<null, DashboardState> {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }
    public render () {
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
                {this.renderBottomOfPage()}

            </View>
        )
    }
    private setModalVisible = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    }
    private addEvent = () => {
        // this.props.navigation.navigate('AddEventPage')
        this.setModalVisible();
    }
    private renderBottomOfPage = () => {
        if(this.state.modalVisible) {
            return (
                <View style={styles.modalContainer}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                        }}>
                            <AddEvent
                                onCancel={this.setModalVisible}
                                onSubmit={null}
                            />

                    </Modal>
                </View>
            )
        }
        return (
            <Footer
                onAddEvent={this.addEvent}
            />
        )
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
    modalContainer: {
        height: 500,
        color: 'blue'
    }
});