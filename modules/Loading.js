import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

class Loading extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#152C52" />
      </View>
    )
  }
}

export default Loading;