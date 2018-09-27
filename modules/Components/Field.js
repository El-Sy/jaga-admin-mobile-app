import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { styles } from '../../stylesheets/app';

const Field = (props) => {
  const valid = props.data != null && props.data == '' && props.data.length > 0 ;
  return (
    <View style={styles.details_key_value}>
      <Text style={styles.details_key}>{props.label}</Text>
      <Text style={valid ? styles.details_value : styles.details_not_specified }>{valid ? props.data : "--not specified--"}</Text>
    </View>)
}

export default Field;