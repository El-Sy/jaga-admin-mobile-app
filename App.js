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
          <Image source={logo} style={styles.company_logo} />
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

        <View style={styles.bottom_nav}>
        </View>

      </View>
    );
  }
}

export default App;

const logo = {
  uri: "https://cdn.jaga-me.com/logos/v2/logo.white.large.png"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#605ca8',
  },
  content:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"lightgray",
    alignSelf: 'stretch'
  },
  bottom_nav:{
    height:50,
    backgroundColor:"#fafafa",
    alignSelf: 'stretch'
  },
  top_nav:{
    height:50,
    backgroundColor:"#605ca8",
    alignSelf: 'stretch'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  company_logo: {
    height: 50,
    width: 150
  }
});
