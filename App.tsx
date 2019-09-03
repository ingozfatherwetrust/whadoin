/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import LogonPage from "./src/Logon/Components/LogonPage";
import Dashboard from './src/Components/Dashboard/Dashboard'
import AddEvent from "./src/Components/AddEvent/AddEvent";
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import {AppIntroType} from "./src/Logon/Actions/Logon";
import {createAppContainer} from "react-navigation";
import NavigationService from './NavigationService';


const RootStack = createStackNavigator(
    {
        LogOn: LogonPage,
        DashboardPage: Dashboard,
        AddEventPage: AddEvent
    },
    {
        initialRouteName: 'LogOn',
        // headerMode: 'none',
        // navigationOptions:  {
        //     title: 'Whadoin',
        //     headerLeft: null,
        //     headerStyle: {
        //         backgroundColor: 'green',
        //     },
            // headerVisible: false,
        // }
    },

);
const AppContainer = createAppContainer(RootStack);
let initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
};
export function todos(state = initialState, action) {
    const {firstName, lastName, email, password, phoneNumber, refreshToken, uid} = action;
    switch (action.type) {
        case AppIntroType.SignIn:
            // let {userName, password} = action;
            console.log('state', state);
            return {...state, userName: action.userName, password: action.password};
        // case AppIntroType.SignUp:
            // const {firstName, lastName, email, password, phoneNumber} = action;
            // return {...state, firstName, lastName, email, password, phoneNumber};
        case AppIntroType.SignUpSuccess:

            return {...state, firstName, lastName, email, password, phoneNumber, refreshToken, uid}
        default:
            return state
    }
}

export default class App extends Component<null> {
  render() {
    return (
        <Provider store={configureStore()}>
            <AppContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        </Provider>
    )

  }
}