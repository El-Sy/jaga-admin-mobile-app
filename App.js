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
import PatientsList from './modules/Patients/PatientsList';

//config
import config from './config.js'

//services
// import {getPatients} from './modules/Patients/patient.service';


//import styles
import { styles } from './stylesheets/app';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {

  componentWillMount(){

  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.top_nav}>
        </View>
        <PatientsList />

        <BottomNav />

      </View>
    );
  }
}
export default App;