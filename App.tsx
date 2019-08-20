/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LogonPage from "./src/Components/Logon/LogonPage";
import Dashboard from './src/Components/Dashboard/Dashboard'
import AddEvent from "./src/Components/AddEvent/AddEvent";
import {createStore} from "redux";
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import {AppIntroType} from "./src/Actions/Logon";


const RootStack = createStackNavigator(
    {
        LogOn: LogonPage,
        DashboardPage: Dashboard,
        AddEventPage: AddEvent
    },
    {
        initialRouteName: 'LogOn',
        navigationOptions:  {
            title: 'Whadoin',
            headerLeft: null,
            headerStyle: {
                backgroundColor: 'green',
            },
        }
    },

);
export function todos(state = [], action) {
    switch (action.type) {
        case AppIntroType.SignIn:
            console.log('state', state)
            return state.concat([action.email])
        default:
            return state
    }
}
// const store = createStore(todos)
const store = configureStore();

export default class App extends Component<null> {
  render() {
    return (
        <Provider store={configureStore()}>
            <RootStack/>
        </Provider>
    )

  }
}