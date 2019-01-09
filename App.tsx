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
import LogonPage from "./src/Logon/LogonPage";
import Dashboard from './src/Dashboard/Dashboard'
import AddEvent from "./src/AddEvent/AddEvent";

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

export default class App extends Component<null> {
  render() {
    return <RootStack/>


  }
}