/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


//import presentation compononents
import BottomNav from './modules/BottomNav';

//config
import config from './config.js'


//import styles
import { styles } from './stylesheets/app';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.top_nav}>
        </View>


        <View style={styles.content}>
          <Image source={config.logo} style={styles.company_logo} />
          <Text style={styles.welcome}>
            Welcome to React Native!
        </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
        </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>

        <BottomNav />

      </View>
    );
  }
}

export default App;