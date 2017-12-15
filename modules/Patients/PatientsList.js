import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';


//services
import {getPatients} from './patient.service';

//import styles
import { styles } from '../../stylesheets/app';


class PatientsList extends Component {

  componentWillMount(){

  }

  render() {
    return (
        <ScrollView contentContainerStyle={styles.content}>
       
          <Text style={styles.instructions}>
            Patients
          </Text>
    
        </ScrollView>
    );
  }
}
export default PatientsList;