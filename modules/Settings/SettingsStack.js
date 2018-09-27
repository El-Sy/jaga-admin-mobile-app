import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Settings from './Settings';

const SettingsStack = StackNavigator({
    Settings: { screen: Settings }
},
    {
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName
        })
    }
);

export default SettingsStack;