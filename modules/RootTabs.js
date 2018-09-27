import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import SettingsStack from './Settings/SettingsStack';
import Main from './Main/Main';
import Loading from './Loading';

//  import styles
import { styles } from '../stylesheets/app';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//  switch to TabNav for JobsStack

class RootTabs extends Component {

  render() {
    if (this.props.config != null) {
      let RootRoutes = {}
      console.log("this.props.config", this.props.config);

      //  Component Main
      this.props.config.BottomNavTabs.map(tab => RootRoutes[tab.name] = { screen: Main })

      //  Component SettingsStack
      if (RootRoutes.Settings != null) {
        RootRoutes["Settings"] = { screen: SettingsStack }
      }
      
      const RootNav = TabNavigator(
        RootRoutes,
        {
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              switch (routeName) {
                case ('Jobs'):
                  iconName = `ios-briefcase${focused ? '' : '-outline'}`;
                  break;
                case ('Patients'):
                  iconName = `ios-people${focused ? '' : '-outline'}`;
                  break;
                case ('Customers'):
                  iconName = `ios-body${focused ? '' : '-outline'}`;
                  break;
                case ('JagaPros'):
                  iconName = `ios-person${focused ? '' : '-outline'}`;
                  break;
                case ('Settings'):
                  iconName = `ios-cog${focused ? '' : '-outline'}`;
                  break;
                default:
                  iconName = `ios-cog${focused ? '' : '-outline'}`;
                  break;
              }
              return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
          }),
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
          tabBarComponent: TabBarBottom,
          tabBarPosition: 'bottom',
          swipeEnabled: false,
        }
      );
      return <RootNav />
    } else {
      return <Loading />
    }
  }
}

export default RootTabs;