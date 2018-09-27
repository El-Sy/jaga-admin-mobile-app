import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import MainContainer from './MainContainer';
import ContentContainer from '../Content/ContentContainer';

import { styles } from '../../stylesheets/app';

class Main extends Component {

    render() {
        let routes = {};
        const {routeName} = this.props.navigation.state;
        routes[routeName] = { screen: MainContainer }
        routes[`${routeName.substring(0, this.props.navigation.state.routeName.length - 1)} Details`] = { screen: ContentContainer }

        const MainStackNav = StackNavigator(
            routes,
            {
                navigationOptions: ({ navigation }) => ({
                    title: navigation.state.routeName
                })
            }
        );
        return <MainStackNav />
    }
}

export default Main;